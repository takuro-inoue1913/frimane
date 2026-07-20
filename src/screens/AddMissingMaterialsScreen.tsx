import React, { FC, useMemo, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { BrunchType, recipesState } from '@src/states/recipe';
import { RootStackParamList } from '@src/types';
import { useAtomValue } from 'jotai';
import { FridgeMaster, fridgeMasterState } from '@src/states/fridge';
import { Image as ExpoImage } from 'expo-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradientButton } from '@src/components/common/GradationButton';
import { useTypedNavigation } from '@src/hooks/useTypedNavigation';
import { useRequestInsertUserDailyRecipe } from '@src/interface/hooks/recipe/useRequestInsertUserDailyRecipe';
import { useRecipesActions } from '@src/states/recipe/actions';
import { LoadingMask } from '@src/components/common/LoadingMask';
import { useRequestInsertShoppingMemo } from '@src/interface/hooks/shoppingMemo/useRequestInsertShoppingMemo';
import { useShoppingMemoActions } from '@src/states/shoppingMemo';
import { useRequestGetAllShoppingMemo } from '@src/interface/hooks/shoppingMemo/useRequestGetAllShoppingMemo';
import { useRequestUpdateShoppingMemo } from '@src/interface/hooks/shoppingMemo/useRequestUpdateShoppingMemo';
import { useRequestUpdateFridgeStock } from '@src/interface/hooks/fridge/useRequestUpdateFridgeStock';

type Props = {
  route: RouteProp<RootStackParamList, '追加する材料'>;
};

type MissingMaterial = {
  missingQuantity: number;
} & FridgeMaster;

export const AddMissingMaterialsScreen: FC<Props> = ({ route }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const recipes = useAtomValue(recipesState);
  const fridgeMaster = useAtomValue(fridgeMasterState);
  const { shoppingMemo } = useRequestGetAllShoppingMemo();
  const requestInsertShoppingMemo = useRequestInsertShoppingMemo();
  const requestUpdateShoppingMemo = useRequestUpdateShoppingMemo();
  const requestInsertUserDailyRecipe = useRequestInsertUserDailyRecipe();
  const requestUpdateFridgeStock = useRequestUpdateFridgeStock();
  const shoppingMemoActions = useShoppingMemoActions();
  const { addDailyRecipe } = useRecipesActions();
  const navigation = useTypedNavigation();

  const recipe = recipes.byId[route.params.submitValues.recipeId];

  const missingMaterials: MissingMaterial[] = useMemo(() => {
    // material の masterId が fridgeMaster と一致するものであり、かつ、material の quantity が fridgeMaster の quantity よりも多いものを抽出し、足らない分を計算する
    return recipe.materials
      .filter((material) => {
        const fridgeItem = fridgeMaster.find((f) => f.id === material.masterId);
        return fridgeItem && fridgeItem.quantity < material.quantity;
      })
      .map((material) => {
        const fridgeItem = fridgeMaster.find((f) => f.id === material.masterId);

        if (!fridgeItem) {
          throw new Error('FridgeItem not found');
        }
        return {
          ...fridgeItem,
          missingQuantity: material.quantity - fridgeItem!.quantity,
        };
      });
  }, [fridgeMaster, recipe.materials]);

  const addDailyRecipeFn = async () => {
    const result = await requestInsertUserDailyRecipe({
      date: route.params.date,
      brunchType: route.params.submitValues.brunchType,
      recipeId: route.params.submitValues.recipeId,
      isCreated: route.params.submitValues.isCreated,
    });
    if (!result) {
      setIsProcessing(false);
      throw new Error('addDailyRecipe failed');
    }
    addDailyRecipe({
      id: result.user_daily_id,
      date: route.params.date,
      dailyRecipe: {
        id: result.user_daily_recipes_id,
        recipeId: route.params.submitValues.recipeId,
        recipeName: recipe.name,
        recipeImageUri: recipe.imageUri,
        brunchType: route.params.submitValues.brunchType as BrunchType,
        isCreated: route.params.submitValues.isCreated,
      },
    });
  };

  const bulkRequestInsertShoppingMemo = async () => {
    missingMaterials.forEach((missingMaterial) => {
      // すでに shoppingMemo に存在する場合は、quantity を更新する
      const targetShoppingMemoId = shoppingMemo.ids.find(
        (id) => shoppingMemo.byId[id].masterId === missingMaterial.id,
      );

      if (targetShoppingMemoId) {
        const newQuantity =
          missingMaterial.missingQuantity +
          shoppingMemo.byId[targetShoppingMemoId].quantity;
        requestUpdateShoppingMemo({
          shoppingMemoId: targetShoppingMemoId,
          masterId: missingMaterial.id,
          quantity: newQuantity,
        }).then(() => {
          shoppingMemoActions.upsertShoppingMemo({
            ...missingMaterial,
            id: targetShoppingMemoId,
            masterId: missingMaterial.id,
            prevId: targetShoppingMemoId,
            quantity: newQuantity,
            isChecked: shoppingMemo.byId[targetShoppingMemoId].isChecked,
          });
        });
        return;
      }
      requestInsertShoppingMemo({
        masterId: missingMaterial.id,
        quantity: missingMaterial.missingQuantity,
      }).then((res) => {
        if (res) {
          shoppingMemoActions.addShoppingMemo({
            id: res.shopping_memo_id,
            masterId: missingMaterial.id,
            name: missingMaterial.name,
            displayName: missingMaterial.displayName,
            imageUri: missingMaterial.imageUri,
            fridgeType: missingMaterial.fridgeType,
            unitName: missingMaterial.unitName,
            incrementalUnit: missingMaterial.incrementalUnit,
            quantity: missingMaterial.missingQuantity,
            isChecked: false,
          });
        }
      });
    });
  };

  const handlePressSubmit = async () => {
    if (missingMaterials.length > 0) {
      await bulkRequestInsertShoppingMemo();
    }
    await addDailyRecipeFn();
    if (route.params.submitValues.isCreated) {
      recipes.byId[route.params.submitValues.recipeId].materials.forEach(
        async (material) => {
          const currentFridgeStock = fridgeMaster.find(
            (i) => i.id === material.masterId,
          );
          const currentQuantity = currentFridgeStock
            ? currentFridgeStock.quantity
            : 0;
          await requestUpdateFridgeStock({
            masterId: material.masterId,
            fridgeType: material.fridgeType,
            quantity:
              Math.round(
                Math.max(currentQuantity - material.quantity, 0) * 10,
              ) / 10,
          });
        },
      );
    }
    navigation.navigation.goBack();
  };

  const FlatItem = ({ item }: { item: MissingMaterial }) => {
    return (
      <View style={styles.listItem}>
        <View style={styles.listItemContent}>
          <ExpoImage
            source={{ uri: item.imageUri }}
            style={[
              {
                width: 40,
                height: 40,
                borderRadius: 5,
              },
            ]}
          />
          <Text
            style={{
              fontSize: 16,
            }}
          >
            {item.displayName}
          </Text>
        </View>
        <View style={styles.listItemContent}>
          <Text>{item.missingQuantity}</Text>
          <Text style={{ fontSize: 13, color: 'gray' }}>{item.unitName}</Text>
          <TouchableOpacity style={styles.trashIcon} onPress={() => {}}>
            <Icon name="trash-can-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const EmptyComponent = () => {
    return (
      <View style={styles.listItem}>
        <View style={styles.listItemContent}>
          <Text>不足している材料はありません。</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {isProcessing && <LoadingMask />}
      <View style={styles.header}>
        <LinearGradientButton width={200} onPress={handlePressSubmit}>
          <Text style={styles.buttonText}>
            <Icon name="cart-outline" size={20} color="white" />
            {missingMaterials.length > 0 ? '買い物メモに追加' : 'そのまま登録'}
          </Text>
        </LinearGradientButton>
        <TouchableOpacity style={styles.cancelButton} onPress={() => {}}>
          <Text style={styles.cancelButtonText}>キャンセル</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={missingMaterials}
        renderItem={FlatItem}
        keyExtractor={(item) => `${item.id}-${item.name}`}
        ListEmptyComponent={EmptyComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    zIndex: 100,
  },
  disabled: {
    backgroundColor: '#e1e4e8',
  },
  addFridgeButton: {
    width: '70%',
    height: 50,
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    padding: 12,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listItem: {
    padding: 20,
    marginTop: 2,
    backgroundColor: '#f8f9fa',
    borderColor: '#e1e4e8',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemContent: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  trashIcon: {
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#dc3545',
  },
});

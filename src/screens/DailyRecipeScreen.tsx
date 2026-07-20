import React, { useCallback, useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { Calendar } from 'react-native-calendars';
import { COMMON_COLOR_GREEN } from '@src/utils/consts';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import { CommonGradation } from '@src/components/common/CommonGradation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTypedNavigation } from '@src/hooks/useTypedNavigation';
import { useRequestGetUsersDailyRecipes } from '@src/interface/hooks/recipe/useRequestGetUsersDailyRecipes';
import { LoadingMask } from '@src/components/common/LoadingMask';
import { BrunchType, DailyRecipes, Recipes } from '@src/states/recipe';
import {
  SettingDailyRecipeModal,
  SettingDailyRecipeModalDropdownData,
  SubmitValues,
} from '@src/components/DailyRecipeScreen/SettingDailyRecipeModal';
import { useRequestGetAllRecipes } from '@src/interface/hooks/recipe/useRequestGetAllRecipes';
import { useRequestGetAllFridgeMaster } from '@src/interface/hooks/shoppingMemo/useRequestGetAllFridgeMaster';
import { useRequestInsertUserDailyRecipe } from '@src/interface/hooks/recipe/useRequestInsertUserDailyRecipe';
import { useRecipesActions } from '@src/states/recipe/actions';
import { useRequestUpdateUserDailyRecipe } from '@src/interface/hooks/recipe/useRequestUpdateUserDailyRecipe';
import { useRequestDeleteUserDailyRecipe } from '@src/interface/hooks/recipe/useRequestDeleteUserDailyRecipe';
import { useIsFocused } from '@react-navigation/native';
import { DailyRecipeItem } from '@src/components/DailyRecipeScreen/DailyRecipeItem';
import { useRequestUpdateFridgeStock } from '@src/interface/hooks/fridge/useRequestUpdateFridgeStock';

export const DailyRecipeScreen = () => {
  const isFocused = useIsFocused();
  const {
    isFetching: isFetchingGetUsersDailyRecipes,
    dailyRecipes,
    refetch: refetchGetUsersDailyRecipes,
  } = useRequestGetUsersDailyRecipes(
    dayjs().startOf('month').format('YYYY-MM-DD'),
    dayjs().endOf('month').format('YYYY-MM-DD'),
  );
  const { fridgeMaster, refetch: refetchGetAllFridgeMaster } =
    useRequestGetAllFridgeMaster();
  const {
    refetch: refetchGetAllRecipes,
    isFetching: isFetchingGetAllRecipes,
    recipes,
  } = useRequestGetAllRecipes();
  const { addDailyRecipe, updateDailyRecipe, deleteDailyRecipe } =
    useRecipesActions();
  const requestInsertUserDailyRecipe = useRequestInsertUserDailyRecipe();
  const requestUpdateUserDailyRecipe = useRequestUpdateUserDailyRecipe();
  const requestDeleteUserDailyRecipe = useRequestDeleteUserDailyRecipe();
  const requestUpdateFridgeStock = useRequestUpdateFridgeStock();
  const navigation = useTypedNavigation();

  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    dayjs().format('YYYY-MM-DD'),
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<
    Recipes['byId'][number] | null
  >(null);
  const [selectedDailyRecipeId, setSelectedDailyRecipeId] = useState<
    string | null
  >(null);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');

  const dailyRecipesData = useMemo<DailyRecipes['byId'][number][]>(() => {
    return Object.values(dailyRecipes.byId).filter(
      (i) => i.date === selectedDate,
    );
  }, [dailyRecipes.byId, selectedDate]);

  const getTargetDailyRecipe = useCallback(
    (recipeId: string) => {
      const targetDailyRecipe = dailyRecipesData.find((i) =>
        i.dailyRecipes.find((j) => j.recipeId === recipeId),
      );

      const targetRecipe = targetDailyRecipe?.dailyRecipes.find(
        (i) => i.recipeId === recipeId,
      );

      if (!targetDailyRecipe || !targetRecipe) {
        return null;
      }

      return {
        dailyRecipeId: targetDailyRecipe!.id,
        ...targetRecipe,
      };
    },
    [dailyRecipesData],
  );

  const recipeMasterData = useMemo<
    SettingDailyRecipeModalDropdownData[]
  >(() => {
    return recipes.ids.map((i) => ({
      label: recipes.byId[i].name,
      value: i,
      searchKey: recipes.byId[i].name,
    }));
  }, [recipes]);

  const handleChangeDropdownValue = (
    data: SettingDailyRecipeModalDropdownData,
  ) => {
    setSelectedRecipe(recipes.byId[data.value]);
  };

  const handleClickDailyRecipe = (
    item: DailyRecipes['byId'][number],
    index: number,
  ) => {
    const recipe = recipes.byId[item.dailyRecipes[index].recipeId];
    setSelectedRecipe(recipe);
    setSelectedDailyRecipeId(item.dailyRecipes[index].id);
    setModalMode('edit');
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    selectedRecipe && setSelectedRecipe(null);
    selectedDailyRecipeId && setSelectedDailyRecipeId(null);
  };

  const decreaseFridgeStock = useCallback(
    async (recipeId: string) => {
      setIsProcessing(true);
      recipes.byId[recipeId].materials.forEach(async (material) => {
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
            Math.round(Math.max(currentQuantity - material.quantity, 0) * 10) /
            10,
        });
      });
      setIsProcessing(false);
    },
    [recipes.byId, fridgeMaster, requestUpdateFridgeStock],
  );

  const handleSubmitModal = useCallback(
    async (values: SubmitValues) => {
      if (!selectedRecipe) {
        return;
      }

      const addDailyRecipeFn = async () => {
        setModalVisible(false);
        setIsProcessing(true);
        const result = await requestInsertUserDailyRecipe({
          date: selectedDate,
          brunchType: values.brunchType,
          recipeId: values.recipeId,
          isCreated: values.isCreated,
        });
        if (!result) {
          setIsProcessing(false);
          throw new Error('addDailyRecipe failed');
        }
        addDailyRecipe({
          id: result.user_daily_id,
          date: selectedDate,
          dailyRecipe: {
            id: result.user_daily_recipes_id,
            recipeId: values.recipeId,
            recipeName: selectedRecipe.name,
            recipeImageUri: selectedRecipe.imageUri,
            brunchType: values.brunchType as BrunchType,
            isCreated: values.isCreated,
          },
        });
        if (values.isCreated) {
          decreaseFridgeStock(selectedRecipe.id);
        }
        setIsProcessing(false);
        setSelectedRecipe(null);
        setSelectedDailyRecipeId(null);
      };

      const updateDailyRecipeFn = async () => {
        setModalVisible(false);
        setIsProcessing(true);
        if (!selectedDailyRecipeId) {
          throw new Error('selectedDailyRecipeId is not found');
        }
        const result = await requestUpdateUserDailyRecipe({
          userDailyRecipeId: selectedDailyRecipeId,
          brunchType: values.brunchType,
          recipeId: values.recipeId,
          isCreated: values.isCreated,
        });
        if (!result) {
          setIsProcessing(false);
          throw new Error('updateDailyRecipe failed');
        }
        updateDailyRecipe({
          id: result.user_daily_id,
          date: selectedDate,
          dailyRecipe: {
            id: result.user_daily_recipes_id,
            recipeId: values.recipeId,
            recipeName: selectedRecipe.name,
            recipeImageUri: selectedRecipe.imageUri,
            brunchType: values.brunchType as BrunchType,
            isCreated: values.isCreated,
          },
        });
        if (values.isCreated) {
          decreaseFridgeStock(selectedRecipe.id);
        }
        setIsProcessing(false);
        setSelectedRecipe(null);
        setSelectedDailyRecipeId(null);
      };

      if (modalMode === 'add') {
        Alert.alert(
          '足らない食材を買い物メモに追加しますか？',
          '追加する場合、買い物メモ追加候補画面に遷移します。',
          [
            {
              text: '追加する',
              onPress: () => {
                setModalVisible(false);
                setIsProcessing(false);
                selectedRecipe && setSelectedRecipe(null);
                selectedDailyRecipeId && setSelectedDailyRecipeId(null);
                navigation.navigate('追加する材料', {
                  submitValues: values,
                  date: selectedDate,
                });
              },
            },
            {
              text: '追加しないで登録',
              onPress: () => addDailyRecipeFn(),
            },
            {
              text: 'キャンセル',
              style: 'destructive',
              onPress: () => {
                setIsProcessing(false);
              },
            },
          ],
        );
      } else {
        updateDailyRecipeFn();
      }
    },
    [
      selectedRecipe,
      selectedDate,
      modalMode,
      selectedDailyRecipeId,
      navigation,
      requestInsertUserDailyRecipe,
      addDailyRecipe,
      requestUpdateUserDailyRecipe,
      updateDailyRecipe,
      decreaseFridgeStock,
    ],
  );

  const handleDeleteDailyRecipe = useCallback(async () => {
    if (!selectedDailyRecipeId) {
      return;
    }

    const deleteDailyRecipeFn = async () => {
      setModalVisible(false);
      setIsProcessing(true);
      const result = await requestDeleteUserDailyRecipe({
        userDailyRecipeId: selectedDailyRecipeId,
      });
      if (!result) {
        setIsProcessing(false);
        throw new Error('deleteDailyRecipe failed');
      }
      deleteDailyRecipe({
        id: result.user_daily_id,
        date: selectedDate,
        dailyRecipeId: selectedDailyRecipeId,
      });
      setIsProcessing(false);
    };
    Alert.alert('削除しますか？', '', [
      {
        text: '削除する',
        onPress: deleteDailyRecipeFn,
      },
      {
        text: 'キャンセル',
        style: 'destructive',
        onPress: () => {
          setIsProcessing(false);
        },
      },
    ]);
  }, [
    selectedDailyRecipeId,
    selectedDate,
    requestDeleteUserDailyRecipe,
    deleteDailyRecipe,
  ]);

  useEffect(() => {
    if (isFocused) {
      refetchGetAllFridgeMaster();
      refetchGetAllRecipes();
      refetchGetUsersDailyRecipes();
    }
  }, [
    isFocused,
    refetchGetAllFridgeMaster,
    refetchGetAllRecipes,
    refetchGetUsersDailyRecipes,
  ]);

  const NewDailyRecipe = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          setModalMode('add');
          setModalVisible(true);
        }}
      >
        <View style={styles.newDailyRecipeWrapper}>
          <Text style={styles.textStyle}>献立を設定する</Text>
          <Icon name="plus" size={30} color="gray" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {(isFetchingGetAllRecipes ||
        isFetchingGetUsersDailyRecipes ||
        isProcessing) && <LoadingMask />}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate('レシピ新規登録');
        }}
      >
        <CommonGradation style={styles.commonGradation}>
          <Icon name="silverware-fork-knife" size={30} color="white" />
        </CommonGradation>
      </TouchableOpacity>
      <Calendar
        enableSwipeMonths={true}
        markedDates={{
          [dayjs().format('YYYY-MM-DD')]: {
            textColor: COMMON_COLOR_GREEN,
          },
          [selectedDate]: {
            selected: true,
            selectedColor: COMMON_COLOR_GREEN,
          },
        }}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
      />
      <ScrollView>
        <View style={{ paddingBottom: 80 }}>
          {dailyRecipesData.map((item) => (
            <DailyRecipeItem
              key={item.id}
              item={item}
              onPressDailyRecipe={handleClickDailyRecipe}
            />
          ))}
          <NewDailyRecipe />
        </View>
      </ScrollView>
      <SettingDailyRecipeModal
        visible={modalVisible}
        selectRecipe={selectedRecipe}
        targetDayStr={dayjs(selectedDate).format('MM月DD日')}
        dropdownData={recipeMasterData}
        mode={modalMode}
        brunchType={
          selectedRecipe
            ? getTargetDailyRecipe(selectedRecipe.id)?.brunchType
            : 'breakfast'
        }
        isCreated={
          selectedRecipe
            ? getTargetDailyRecipe(selectedRecipe.id)?.isCreated
            : false
        }
        onChangeDropdownValue={handleChangeDropdownValue}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
        onDelete={handleDeleteDailyRecipe}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    zIndex: 100,
  },
  commonGradation: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  newDailyRecipeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#e1e4e8',
    borderStyle: 'dotted',
  },
});

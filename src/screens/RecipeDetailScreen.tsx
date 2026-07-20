import React, { FC } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useAtomValue } from 'jotai';
import { RootStackParamList } from '@src/types';
import { RouteProp } from '@react-navigation/native';
import { recipesState } from '@src/states/recipe';
import { fridgeMasterState } from '@src/states/fridge';
import { Image as ExpoImage } from 'expo-image';

const { width: windowWidth } = Dimensions.get('window');

type Props = {
  route: RouteProp<RootStackParamList, 'レシピ詳細'>;
};

export const RecipeDetailScreen: FC<Props> = ({ route }) => {
  const recipes = useAtomValue(recipesState);
  const recipe = recipes.byId[route.params.recipeId];
  const fridgeMaster = useAtomValue(fridgeMasterState);

  const materials = recipe.materials.map((material) => {
    const fridgeItem = fridgeMaster.find((f) => f.id === material.masterId);

    return {
      ...fridgeItem!,
      quantity: material.quantity,
    };
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.section}>
          <ExpoImage
            source={{ uri: recipe.imageUri }}
            style={styles.recipeImage}
          />
        </View>
        <View style={styles.labelSection}>
          <Text style={styles.label}>材料</Text>
        </View>
        <View style={styles.section}>
          {materials.map((material) => (
            <View style={styles.materialItem} key={material.id}>
              <View style={styles.itemSide}>
                <ExpoImage
                  source={{ uri: material.imageUri }}
                  style={styles.materialImage}
                />
                <Text>{material.displayName}</Text>
              </View>
              <View style={styles.itemSide}>
                <Text>{material.quantity}</Text>
                <Text>{material.unitName}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.labelSection}>
          <Text style={styles.label}>作り方</Text>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.descriptionInput}>
            {recipe.descriptions.join('\n')}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  labelSection: {
    padding: 10,
    backgroundColor: '#f8f9fa',
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#495057',
  },
  section: {
    marginVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  recipeImage: {
    width: windowWidth - 40,
    height: 200,
    borderRadius: 15,
  },
  materialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: windowWidth - 40,
    paddingVertical: 5,
  },
  itemSide: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  materialImage: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  descriptionWrapper: {
    marginTop: 10,
  },
  descriptionInput: {
    width: windowWidth - 40,
    padding: 10,
    fontSize: 16,
    height: 140,
  },
});

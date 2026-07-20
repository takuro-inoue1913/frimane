import React from 'react';
import { useAtomValue } from 'jotai';
import { StyleSheet, View } from 'react-native';

import { VegetablesView } from '@src/components/FridgeScreen/CategoryViews/VegetablesView';
import { MeatView } from '@src/components/FridgeScreen/CategoryViews/MeatView';
import { selectFridgeCategoryState } from '@src/states/fridge';
import { StapleFoodView } from '@src/components/FridgeScreen/CategoryViews/StapleFoodView';
import { SpiceView } from '@src/components/FridgeScreen/CategoryViews/SpiceView';
import { SeasoningView } from '@src/components/FridgeScreen/CategoryViews/SeasoningView';
import { ProteinSourceView } from '@src/components/FridgeScreen/CategoryViews/ProteinSource';
import { OtherView } from '@src/components/FridgeScreen/CategoryViews/OtherView';
import { FishView } from '@src/components/FridgeScreen/CategoryViews/FishView';
import { DessertView } from '@src/components/FridgeScreen/CategoryViews/DessertView';

export const FridgeScreen = () => {
  const selectFridgeCategory = useAtomValue(selectFridgeCategoryState);

  const SelectedCategoryView = () => {
    switch (selectFridgeCategory) {
      case '野菜類':
        return <VegetablesView />;
      case '肉類':
        return <MeatView />;
      case '魚介類':
        return <FishView />;
      case '主食・粉':
        return <StapleFoodView />;
      case 'スパイス':
        return <SpiceView />;
      case '調味料':
        return <SeasoningView />;
      case '卵・乳・豆':
        return <ProteinSourceView />;
      case 'デザート':
        return <DessertView />;
      case 'その他':
        return <OtherView />;
    }
  };

  return (
    <View style={styles.screenContainer}>
      <SelectedCategoryView />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});

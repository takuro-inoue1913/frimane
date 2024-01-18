import React, {
  ComponentProps,
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { ScrollView, View } from 'react-native';

import { SkeletonFridgeViews } from '@src/components/FridgeScreen/SkeletonFridgeViews';
import { fridgeCommonStyles } from '@src/utils/commonStyle';
import { StickyHeader } from '@src/components/FridgeScreen/StickyHeader';
import { selectItems } from '@src/utils/consts';
import { useProteinSourceStockActions } from '@src/states/fridge/proteinSource';
import { useChunkedArray } from '@src/hooks/useChunkedArray';
import { useRequestGetProteinSourceStocks } from '@src/interface/hooks/proteinSource/useRequestGetProteinSourceStocks';
import { ItemImage } from '@src/components/FridgeScreen/ItemImage';
import { generateEncodeString } from '@src/utils/logics/createEncodeStrings';
import { useRequestUpsertProteinSourceStock } from '@src/interface/hooks/proteinSource/useRequestUpsertProteinSourceStock';
import { useDebouncedUpsertStock } from '@src/hooks/useDebouncedUpsertStock';
import { ItemDetailModal } from '@src/components/FridgeScreen/ItemDetailModal';
import { useRequestUpsertProteinSourceStockDetail } from '@src/interface/hooks/proteinSource/useRequestUpsertProteinSourceStockDetail';
import { GestureHandlerView } from '../GestureHandlerView';
import { ItemDisplayContents } from '../ItemDisplayContents';
import { useRequestUpsertProteinSourceFavorite } from '@src/interface/hooks/proteinSource/useRequestUpsertProteinSourceFavorite';
import { PlusImage } from '../../common/PlusImage';
import { useTypedNavigation } from '@src/hooks/useTypedNavigation';
import { useIsFocused } from '@react-navigation/native';

/**
 * 冷蔵庫の卵・乳・豆画面を表示するコンポーネント。
 */
export const ProteinSourceView: FC = () => {
  const isFocused = useIsFocused();
  const [modalProps, setModalProps] =
    useState<ComponentProps<typeof ItemDetailModal>>();
  const navigation = useTypedNavigation();
  const { proteinSourceStocks, isFetching, refetch } =
    useRequestGetProteinSourceStocks();
  const proteinSourceStockActions = useProteinSourceStockActions();
  const requestUpsertProteinSourceFavorite =
    useRequestUpsertProteinSourceFavorite();
  const requestUpsertProteinSourceStockDetail =
    useRequestUpsertProteinSourceStockDetail();
  const rows = useChunkedArray(proteinSourceStocks.ids, 3);
  const requestUpsertProteinSourceStock = useRequestUpsertProteinSourceStock();
  const { onIncreaseStock, onDecreaseStock } = useDebouncedUpsertStock({
    debounceUpsertStock: requestUpsertProteinSourceStock,
    increaseStock: proteinSourceStockActions.increaseProteinSourceStock,
    decreaseStock: proteinSourceStockActions.decreaseProteinSourceStock,
  });

  const handleLongPress = useCallback(
    (id: string) => {
      setModalProps({
        visible: true,
        id: proteinSourceStocks.byId[id].id,
        sourceUri: proteinSourceStocks.byId[id].imageUri,
        cacheKey: generateEncodeString([
          proteinSourceStocks.byId[id].name,
          proteinSourceStocks.byId[id].id.toString(),
        ]),
        itemName: proteinSourceStocks.byId[id].displayName,
        incrementalUnit: proteinSourceStocks.byId[id].incrementalUnit,
        quantity: proteinSourceStocks.byId[id].quantity,
        unitName: proteinSourceStocks.byId[id].unitName,
        expirationDate: proteinSourceStocks.byId[id].expirationDate,
        memo: proteinSourceStocks.byId[id].memo,
        isFavorite: proteinSourceStocks.byId[id].isFavorite,
        isCustomMaster: proteinSourceStocks.byId[id].isCustomMaster,
        onClose: (formValues) => {
          setModalProps(undefined);
          requestUpsertProteinSourceStockDetail(formValues);
          proteinSourceStockActions.updateProteinSourceStockDetail(formValues);
        },
      });
    },
    [
      proteinSourceStocks.byId,
      proteinSourceStockActions,
      requestUpsertProteinSourceStockDetail,
    ],
  );

  const handlePressReload = async () => {
    await refetch();
  };

  const handleFilterPress = () => {
    proteinSourceStockActions.filterProteinSourceStocks();
  };

  const handleItemDisplayContents = (targetId: string) => {
    proteinSourceStockActions.updateIsFavorite({
      id: targetId,
      isFavorite: !proteinSourceStocks.byId[targetId].isFavorite,
    });
    requestUpsertProteinSourceFavorite({
      id: targetId,
      isFavorite: !proteinSourceStocks.byId[targetId].isFavorite,
    });
  };

  const PlusImageView = () => {
    return (
      <View style={fridgeCommonStyles.box}>
        <PlusImage
          onPress={() =>
            navigation.navigate('食材新規登録', {
              fridgeCategory: '卵・乳・豆',
            })
          }
        />
      </View>
    );
  };

  useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused, refetch]);

  if (isFetching) {
    return <SkeletonFridgeViews />;
  }

  return (
    <>
      <StickyHeader
        selectItems={selectItems}
        isDisabled={isFetching}
        onPressReload={handlePressReload}
        onFilterPress={handleFilterPress}
      />
      <GestureHandlerView>
        <ScrollView contentContainerStyle={fridgeCommonStyles.scrollContainer}>
          {rows.map((row, index) => (
            <View key={`row-${index}`} style={fridgeCommonStyles.row}>
              {row.map((proteinSourceId) => (
                <View
                  key={proteinSourceStocks.byId[proteinSourceId].id}
                  style={fridgeCommonStyles.box}
                >
                  <ItemImage
                    sourceUri={
                      proteinSourceStocks.byId[proteinSourceId].imageUri
                    }
                    cacheKey={generateEncodeString([
                      proteinSourceStocks.byId[proteinSourceId].name,
                      proteinSourceStocks.byId[proteinSourceId].id.toString(),
                    ])}
                    targetId={proteinSourceStocks.byId[proteinSourceId].id}
                    hasStock={
                      proteinSourceStocks.byId[proteinSourceId].hasStock
                    }
                    quantity={
                      proteinSourceStocks.byId[proteinSourceId].quantity
                    }
                    unitName={
                      proteinSourceStocks.byId[proteinSourceId].unitName
                    }
                    incrementalUnit={
                      proteinSourceStocks.byId[proteinSourceId].incrementalUnit
                    }
                    onPressIncrease={onIncreaseStock}
                    onPressDecrease={onDecreaseStock}
                    onLongPress={handleLongPress}
                  />
                  <ItemDisplayContents
                    targetId={proteinSourceStocks.byId[proteinSourceId].id}
                    isFavorite={
                      proteinSourceStocks.byId[proteinSourceId].isFavorite
                    }
                    displayName={
                      proteinSourceStocks.byId[proteinSourceId].displayName
                    }
                    onPress={handleItemDisplayContents}
                  />
                </View>
              ))}
              {/* 項目の最後に PlusImage を表示。 */}
              {index === rows.length - 1 && <PlusImageView />}
            </View>
          ))}
          {
            // もし最終行が3つのアイテムで埋まっている場合は新しい行を追加して PlusImage を表示。
            rows.length > 0 && rows[rows.length - 1].length === 3 && (
              <View style={fridgeCommonStyles.row}>
                <PlusImageView />
              </View>
            )
          }
        </ScrollView>
      </GestureHandlerView>
      {modalProps && <ItemDetailModal {...modalProps} />}
    </>
  );
};
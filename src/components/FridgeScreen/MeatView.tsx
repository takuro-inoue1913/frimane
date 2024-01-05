import React, { ComponentProps, FC, useCallback, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { SkeletonFridgeViews } from '@src/components/FridgeScreen/SkeletonFridgeViews';
import { fridgeCommonStyles } from '@src/utils/commonStyle';
import { StickyHeader } from '@src/components/FridgeScreen/StickyHeader';
import { selectItems } from '@src/utils/consts';
import { useMeatStockActions } from '@src/states/fridge/meat';
import { useChunkedArray } from '@src/hooks/useChunkedArray';
import { useMeatStocks } from '@src/interface/hooks/useMeatStocks';
import { ItemImage } from '@src/components/FridgeScreen/ItemImage';
import { generateEncodeString } from '@src/utils/logics/createEncodeStrings';
import { useUpsertMeatStock } from '@src/interface/hooks/useUpsertMeatStock';
import { useDebouncedUpsertStock } from '@src/hooks/useDebouncedUpsertStock';
import { ItemDetailModal } from '@src/components/FridgeScreen/ItemDetailModal';

/**
 * 冷蔵庫の肉画面を表示するコンポーネント。
 */
export const MeatView: FC = () => {
  const [modalProps, setModalProps] =
    useState<ComponentProps<typeof ItemDetailModal>>();
  const { meatStocks, isFetching } = useMeatStocks();
  const meatStockActions = useMeatStockActions();
  const rows = useChunkedArray(meatStocks.ids, 3);
  const upsertMeatStock = useUpsertMeatStock();
  const { onIncreaseStock, onDecreaseStock } = useDebouncedUpsertStock({
    debounceUpsertStock: upsertMeatStock,
    increaseStock: meatStockActions.increaseMeatStock,
    decreaseStock: meatStockActions.decreaseMeatStock,
  });

  const handleLongPress = useCallback(
    (id: number) => {
      setModalProps({
        visible: true,
        sourceUri: meatStocks.byId[id].imageUri,
        cacheKey: generateEncodeString([
          meatStocks.byId[id].meatName,
          meatStocks.byId[id].meatId.toString(),
        ]),
        incrementalUnit: meatStocks.byId[id].incrementalUnit,
        quantity: meatStocks.byId[id].quantity,
        unitName: meatStocks.byId[id].unitName,
        expirationDate: meatStocks.byId[id].expirationDate,
        memo: meatStocks.byId[id].memo,
        onClose: () => setModalProps(undefined),
      });
    },
    [meatStocks.byId],
  );

  if (isFetching) {
    return <SkeletonFridgeViews />;
  }

  return (
    <>
      <StickyHeader selectItems={selectItems} isDisabled={isFetching} />
      <ScrollView contentContainerStyle={fridgeCommonStyles.scrollContainer}>
        {rows.map((row, index) => (
          <View key={`row-${index}`} style={fridgeCommonStyles.row}>
            {row.map((meatId) => (
              <View
                key={meatStocks.byId[meatId].meatId}
                style={fridgeCommonStyles.box}
              >
                <ItemImage
                  sourceUri={meatStocks.byId[meatId].imageUri}
                  cacheKey={generateEncodeString([
                    meatStocks.byId[meatId].meatName,
                    meatStocks.byId[meatId].meatId.toString(),
                  ])}
                  targetId={meatStocks.byId[meatId].meatId}
                  hasStock={meatStocks.byId[meatId].hasStock}
                  quantity={meatStocks.byId[meatId].quantity}
                  unitName={meatStocks.byId[meatId].unitName}
                  incrementalUnit={meatStocks.byId[meatId].incrementalUnit}
                  onPressIncrease={onIncreaseStock}
                  onPressDecrease={onDecreaseStock}
                  onLongPress={handleLongPress}
                />
                <Text style={fridgeCommonStyles.displayName}>
                  {meatStocks.byId[meatId].meatDisplayName}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      {modalProps && <ItemDetailModal {...modalProps} />}
    </>
  );
};

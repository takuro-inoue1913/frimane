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
import { useFishStockActions } from '@src/states/fridge/fish';
import { useChunkedArray } from '@src/hooks/useChunkedArray';
import { useRequestGetFishStocks } from '@src/interface/hooks/fish/useRequestGetFishStocks';
import { ItemImage } from '@src/components/FridgeScreen/ItemImage';
import { generateEncodeString } from '@src/utils/logics/createEncodeStrings';
import { useRequestUpsertFishStock } from '@src/interface/hooks/fish/useRequestUpsertFishStock';
import { useDebouncedUpsertStock } from '@src/hooks/useDebouncedUpsertStock';
import { ItemDetailModal } from '@src/components/FridgeScreen/ItemDetailModal';
import { useRequestUpsertFishStockDetail } from '@src/interface/hooks/fish/useRequestUpsertFishStockDetail';
import { GestureHandlerView } from '../GestureHandlerView';
import { ItemDisplayContents } from '../ItemDisplayContents';
import { useRequestUpsertFishFavorite } from '@src/interface/hooks/fish/useRequestUpsertFishFavorite';
import { PlusImage } from '../../common/PlusImage';
import { useTypedNavigation } from '@src/hooks/useTypedNavigation';
import { useIsFocused } from '@react-navigation/native';

/**
 * 冷蔵庫の魚介類画面を表示するコンポーネント。
 */
export const FishView: FC = () => {
  const isFocused = useIsFocused();
  const [modalProps, setModalProps] =
    useState<ComponentProps<typeof ItemDetailModal>>();
  const navigation = useTypedNavigation();
  const { fishStocks, isFetching, refetch } = useRequestGetFishStocks();
  const fishStockActions = useFishStockActions();
  const requestUpsertFishFavorite = useRequestUpsertFishFavorite();
  const requestUpsertFishStockDetail = useRequestUpsertFishStockDetail();
  const rows = useChunkedArray(fishStocks.ids, 3);
  const requestUpsertFishStock = useRequestUpsertFishStock();
  const { onIncreaseStock, onDecreaseStock } = useDebouncedUpsertStock({
    debounceUpsertStock: requestUpsertFishStock,
    increaseStock: fishStockActions.increaseFishStock,
    decreaseStock: fishStockActions.decreaseFishStock,
  });

  const handleLongPress = useCallback(
    (id: string) => {
      setModalProps({
        visible: true,
        id: fishStocks.byId[id].id,
        sourceUri: fishStocks.byId[id].imageUri,
        cacheKey: generateEncodeString([
          fishStocks.byId[id].name,
          fishStocks.byId[id].id.toString(),
        ]),
        itemName: fishStocks.byId[id].displayName,
        incrementalUnit: fishStocks.byId[id].incrementalUnit,
        quantity: fishStocks.byId[id].quantity,
        unitName: fishStocks.byId[id].unitName,
        expirationDate: fishStocks.byId[id].expirationDate,
        memo: fishStocks.byId[id].memo,
        isFavorite: fishStocks.byId[id].isFavorite,
        onClose: (formValues) => {
          setModalProps(undefined);
          requestUpsertFishStockDetail(formValues);
          fishStockActions.updateFishStockDetail(formValues);
        },
      });
    },
    [fishStocks.byId, fishStockActions, requestUpsertFishStockDetail],
  );

  const handlePressReload = async () => {
    await refetch();
  };

  const handleFilterPress = () => {
    fishStockActions.filterFishStocks();
  };

  const handleItemDisplayContents = (targetId: string) => {
    fishStockActions.updateIsFavorite({
      id: targetId,
      isFavorite: !fishStocks.byId[targetId].isFavorite,
    });
    requestUpsertFishFavorite({
      id: targetId,
      isFavorite: !fishStocks.byId[targetId].isFavorite,
    });
  };

  const PlusImageView = () => {
    return (
      <View style={fridgeCommonStyles.box}>
        <PlusImage
          onPress={() =>
            navigation.navigate('食材新規登録', {
              fridgeCategory: '肉類',
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
              {row.map((fishId) => (
                <View
                  key={fishStocks.byId[fishId].id}
                  style={fridgeCommonStyles.box}
                >
                  <ItemImage
                    sourceUri={fishStocks.byId[fishId].imageUri}
                    cacheKey={generateEncodeString([
                      fishStocks.byId[fishId].name,
                      fishStocks.byId[fishId].id.toString(),
                    ])}
                    targetId={fishStocks.byId[fishId].id}
                    hasStock={fishStocks.byId[fishId].hasStock}
                    quantity={fishStocks.byId[fishId].quantity}
                    unitName={fishStocks.byId[fishId].unitName}
                    incrementalUnit={fishStocks.byId[fishId].incrementalUnit}
                    onPressIncrease={onIncreaseStock}
                    onPressDecrease={onDecreaseStock}
                    onLongPress={handleLongPress}
                  />
                  <ItemDisplayContents
                    targetId={fishStocks.byId[fishId].id}
                    isFavorite={fishStocks.byId[fishId].isFavorite}
                    displayName={fishStocks.byId[fishId].displayName}
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

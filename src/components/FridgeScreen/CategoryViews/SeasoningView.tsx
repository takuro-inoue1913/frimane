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
import { useSeasoningStockActions } from '@src/states/fridge/seasoning';
import { useChunkedArray } from '@src/hooks/useChunkedArray';
import { useRequestGetSeasoningStocks } from '@src/interface/hooks/seasoning/useRequestGetSeasoningStocks';
import { ItemImage } from '@src/components/FridgeScreen/ItemImage';
import { generateEncodeString } from '@src/utils/logics/createEncodeStrings';
import { useRequestUpsertSeasoningStock } from '@src/interface/hooks/seasoning/useRequestUpsertSeasoningStock';
import { useDebouncedUpsertStock } from '@src/hooks/useDebouncedUpsertStock';
import { ItemDetailModal } from '@src/components/FridgeScreen/ItemDetailModal';
import { useRequestUpsertSeasoningStockDetail } from '@src/interface/hooks/seasoning/useRequestUpsertSeasoningStockDetail';
import { GestureHandlerView } from '../GestureHandlerView';
import { ItemDisplayContents } from '../ItemDisplayContents';
import { useRequestUpsertSeasoningFavorite } from '@src/interface/hooks/seasoning/useRequestUpsertSeasoningFavorite';
import { PlusImage } from '../../common/PlusImage';
import { useTypedNavigation } from '@src/hooks/useTypedNavigation';
import { useIsFocused } from '@react-navigation/native';

/**
 * 冷蔵庫の調味料画面を表示するコンポーネント。
 */
export const SeasoningView: FC = () => {
  const isFocused = useIsFocused();
  const [modalProps, setModalProps] =
    useState<ComponentProps<typeof ItemDetailModal>>();
  const navigation = useTypedNavigation();
  const { seasoningStocks, isFetching, refetch } =
    useRequestGetSeasoningStocks();
  const seasoningStockActions = useSeasoningStockActions();
  const requestUpsertSeasoningFavorite = useRequestUpsertSeasoningFavorite();
  const requestUpsertSeasoningStockDetail =
    useRequestUpsertSeasoningStockDetail();
  const rows = useChunkedArray(seasoningStocks.ids, 3);
  const requestUpsertSeasoningStock = useRequestUpsertSeasoningStock();
  const { onIncreaseStock, onDecreaseStock } = useDebouncedUpsertStock({
    debounceUpsertStock: requestUpsertSeasoningStock,
    increaseStock: seasoningStockActions.increaseSeasoningStock,
    decreaseStock: seasoningStockActions.decreaseSeasoningStock,
  });

  const handleLongPress = useCallback(
    (id: string) => {
      setModalProps({
        visible: true,
        id: seasoningStocks.byId[id].id,
        sourceUri: seasoningStocks.byId[id].imageUri,
        cacheKey: generateEncodeString([
          seasoningStocks.byId[id].name,
          seasoningStocks.byId[id].id.toString(),
        ]),
        itemName: seasoningStocks.byId[id].displayName,
        incrementalUnit: seasoningStocks.byId[id].incrementalUnit,
        quantity: seasoningStocks.byId[id].quantity,
        unitName: seasoningStocks.byId[id].unitName,
        expirationDate: seasoningStocks.byId[id].expirationDate,
        memo: seasoningStocks.byId[id].memo,
        isFavorite: seasoningStocks.byId[id].isFavorite,
        isCustomMaster: seasoningStocks.byId[id].isCustomMaster,
        onClose: (formValues) => {
          setModalProps(undefined);
          requestUpsertSeasoningStockDetail(formValues);
          seasoningStockActions.updateSeasoningStockDetail(formValues);
        },
      });
    },
    [
      seasoningStocks.byId,
      seasoningStockActions,
      requestUpsertSeasoningStockDetail,
    ],
  );

  const handlePressReload = async () => {
    await refetch();
  };

  const handleFilterPress = () => {
    seasoningStockActions.filterSeasoningStocks();
  };

  const handleItemDisplayContents = (targetId: string) => {
    seasoningStockActions.updateIsFavorite({
      id: targetId,
      isFavorite: !seasoningStocks.byId[targetId].isFavorite,
    });
    requestUpsertSeasoningFavorite({
      id: targetId,
      isFavorite: !seasoningStocks.byId[targetId].isFavorite,
    });
  };

  const PlusImageView = () => {
    return (
      <View style={fridgeCommonStyles.box}>
        <PlusImage
          onPress={() =>
            navigation.navigate('食材新規登録', {
              fridgeCategory: '調味料',
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
              {row.map((seasoningId) => (
                <View
                  key={seasoningStocks.byId[seasoningId].id}
                  style={fridgeCommonStyles.box}
                >
                  <ItemImage
                    sourceUri={seasoningStocks.byId[seasoningId].imageUri}
                    cacheKey={generateEncodeString([
                      seasoningStocks.byId[seasoningId].name,
                      seasoningStocks.byId[seasoningId].id.toString(),
                    ])}
                    targetId={seasoningStocks.byId[seasoningId].id}
                    hasStock={seasoningStocks.byId[seasoningId].hasStock}
                    quantity={seasoningStocks.byId[seasoningId].quantity}
                    unitName={seasoningStocks.byId[seasoningId].unitName}
                    incrementalUnit={
                      seasoningStocks.byId[seasoningId].incrementalUnit
                    }
                    onPressIncrease={onIncreaseStock}
                    onPressDecrease={onDecreaseStock}
                    onLongPress={handleLongPress}
                  />
                  <ItemDisplayContents
                    targetId={seasoningStocks.byId[seasoningId].id}
                    isFavorite={seasoningStocks.byId[seasoningId].isFavorite}
                    displayName={seasoningStocks.byId[seasoningId].displayName}
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
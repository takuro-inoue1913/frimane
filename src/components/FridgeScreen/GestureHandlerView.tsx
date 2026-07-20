import { selectFridgeCategoryState } from '@src/states/fridge';
import { selectItems } from '@src/utils/consts';
import React, { FC } from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import { useAtom } from 'jotai';

type Props = {
  children: React.ReactNode;
};
/**
 * 左右のスワイプを検知するコンポーネント。
 */
export const GestureHandlerView: FC<Props> = ({ children }) => {
  const [selectFridgeCategory, setSelectFridgeCategory] = useAtom(
    selectFridgeCategoryState,
  );
  selectItems;

  const onSwipe = ({
    nativeEvent,
  }: {
    nativeEvent: {
      translationX: number;
      oldState: State;
    };
  }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      const { translationX } = nativeEvent;

      // 右にスワイプされた場合、selectItems から 現在選択されているカテゴリー の前のカテゴリーを取得する
      if (translationX > 30) {
        selectItems.find((item, index) => {
          if (item === selectFridgeCategory) {
            setSelectFridgeCategory(
              selectItems[index - 1] ?? selectItems[selectItems.length - 1],
            );
          }
        });
      }
      // 左にスワイプされた場合、selectItems から 現在選択されているカテゴリー の次のカテゴリーを取得する
      if (translationX < -30) {
        selectItems.find((item, index) => {
          if (item === selectFridgeCategory) {
            setSelectFridgeCategory(selectItems[index + 1] ?? selectItems[0]);
          }
        });
      }
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler
        onHandlerStateChange={onSwipe}
        activeOffsetX={[-30, 30]}
      >
        {children}
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

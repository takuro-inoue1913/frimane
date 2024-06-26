import React, { useState, FC, useRef, memo } from 'react';
import {
  Animated,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image as ExpoImage } from 'expo-image';
import * as Haptics from 'expo-haptics';

import { SkeletonImage } from '@src/components/common/SkeletonImage';
import { commonStyles } from '@src/utils/commonStyle';
import { ItemBadge } from '@src/components/FridgeScreen/ItemBadge';
import { COMMON_COLOR_GREEN } from '@src/utils/consts';
import { OnPressImageArgs } from '@src/types';

type Props = {
  /** 画像のURI */
  sourceUri: string;
  /** 画像のキャッシュキー */
  cacheKey: string;
  /** 対象データのID */
  targetId: string;
  /** 在庫があるかどうか */
  hasStock: boolean;
  /** 在庫数 */
  quantity: number;
  /** 増減単位 */
  incrementalUnit: number;
  /** 単位名 */
  unitName: string;
  /** 追加ボタンを押した時に実行される関数。 */
  onPressIncrease?: (args: OnPressImageArgs) => Promise<void>;
  /** 減らすボタンを押した時に実行される関数。 */
  onPressDecrease?: (args: OnPressImageArgs) => Promise<void>;
  onLongPress?: (targetId: string) => void;
};

/**
 * 項目の画像を表示するコンポーネント。
 */
export const ItemImage: FC<Props> = memo(
  ({
    sourceUri,
    hasStock,
    targetId,
    quantity,
    incrementalUnit,
    unitName,
    onPressIncrease,
    onPressDecrease,
    onLongPress,
  }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [touchedSide, setTouchedSide] = useState<'left' | 'right' | null>(
      null,
    );
    const [overlayOpacity, setOverlayOpacity] = useState(0);

    const badgePositionY = useRef(new Animated.Value(0)).current;

    const handlePress = async (event: GestureResponderEvent) => {
      const touchX = event.nativeEvent.locationX;
      const imageHalfWidth = commonStyles.image.width / 2;
      const newTouchedSide = touchX < imageHalfWidth ? 'left' : 'right';
      setTouchedSide(newTouchedSide);
      setOverlayOpacity(0);
      switch (newTouchedSide) {
        case 'left':
          onPressDecrease?.({
            targetId,
            currentQuantity: quantity,
            incrementalUnit,
          });
          break;
        case 'right':
          onPressIncrease?.({
            targetId,
            currentQuantity: quantity,
            incrementalUnit,
          });
          break;
      }
      setTimeout(() => setOverlayOpacity(1), 100);
      setTimeout(() => setTouchedSide(null), 200);
      Haptics.selectionAsync();
      onBounceAnimation();
    };

    const onBounceAnimation = () => {
      Animated.sequence([
        Animated.timing(badgePositionY, {
          toValue: -20,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(badgePositionY, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    };

    const handleLongPress = () => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      onLongPress?.(targetId);
    };

    return (
      <>
        {!isLoaded && <SkeletonImage />}
        <Pressable onPress={handlePress} onLongPress={handleLongPress}>
          <ExpoImage
            source={{ uri: sourceUri }}
            onLoadEnd={() => setIsLoaded(true)}
            style={[
              hasStock ? styles.activeImage : styles.image,
              isLoaded ? styles.imageVisible : styles.imageHidden,
            ]}
          />
          {isLoaded && touchedSide && (
            <View
              style={[
                touchedSide === 'left'
                  ? styles.overlayLeft
                  : styles.overlayRight,
                {
                  opacity: overlayOpacity,
                },
              ]}
              pointerEvents="none"
            >
              <Icon
                name={touchedSide === 'left' ? 'minus' : 'plus'}
                size={35}
                color="#fff"
                // 下側の中央寄せにする
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: touchedSide === 'left' ? 0 : undefined,
                  right: touchedSide === 'right' ? 0 : undefined,
                }}
              />
            </View>
          )}
          {isLoaded && hasStock && (
            <Animated.View
              style={{
                transform: [{ translateY: badgePositionY }],
                position: 'absolute',
                top: -5,
                right: 0,
              }}
            >
              <ItemBadge quantity={quantity} unitName={unitName} />
            </Animated.View>
          )}
        </Pressable>
      </>
    );
  },
);
ItemImage.displayName = 'ItemImage';

const styles = StyleSheet.create({
  image: {
    ...commonStyles.image,
    borderWidth: 3,
    borderColor: '#e1e4e8',
  },
  activeImage: {
    ...commonStyles.image,
    borderWidth: 3,
    borderColor: COMMON_COLOR_GREEN,
  },
  imageVisible: {
    opacity: 1,
  },
  imageHidden: {
    opacity: 0,
  },
  overlayLeft: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: commonStyles.image.width / 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  overlayRight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 18,
    width: commonStyles.image.width / 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});

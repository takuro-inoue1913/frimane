import React, { useState, ComponentProps, FC, useRef } from 'react';
import {
  Animated,
  GestureResponderEvent,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { SkeletonImage } from '@src/components/common/SkeletonImage';
import commonStyle from '@src/utils/commonStyle';
import { ItemBadge } from '@src/components/FridgeScreen/ItemBadge';

type Props = {
  /** 画像の読み込みが完了した時に実行される関数。 */
  onLoadEnd?: () => void;
  /** 在庫があるかどうか */
  hasStock: boolean;
  /** 在庫数 */
  quantity: number;
  /** 単位名 */
  unitName: string;
} & ComponentProps<typeof Image>;

/**
 * 項目の画像を表示するコンポーネント。
 */
export const ItemImage: FC<Props> = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [touchedSide, setTouchedSide] = useState<'left' | 'right' | null>(null);
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  const badgePositionY = useRef(new Animated.Value(0)).current;

  const handlePress = (event: GestureResponderEvent) => {
    const touchX = event.nativeEvent.locationX;
    const imageHalfWidth = commonStyle.image.width / 2;
    const newTouchedSide = touchX < imageHalfWidth ? 'left' : 'right';
    setTouchedSide(newTouchedSide);
    setOverlayOpacity(0);
    setTimeout(() => setOverlayOpacity(1), 100);
    // TODO: ここでAPIを叩く。
    setTimeout(() => {
      setTouchedSide(null);
    }, 200);
    handleBadgeAnimation();
  };

  const handleBadgeAnimation = () => {
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

  return (
    <>
      {!isLoaded && <SkeletonImage />}
      <TouchableOpacity activeOpacity={1} onPress={handlePress}>
        <Image
          {...props}
          onLoadEnd={() => setIsLoaded(true)}
          style={[
            props.hasStock ? styles.activeImage : styles.image,
            isLoaded ? styles.imageVisible : styles.imageHidden,
          ]}
        />
        {isLoaded && touchedSide && (
          <View
            style={[
              touchedSide === 'left' ? styles.overlayLeft : styles.overlayRight,
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
        {isLoaded && props.hasStock && (
          <Animated.View
            style={{
              transform: [{ translateY: badgePositionY }],
              position: 'absolute',
              top: -5,
              right: 0,
            }}
          >
            <ItemBadge quantity={props.quantity} unitName={props.unitName} />
          </Animated.View>
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    ...commonStyle.image,
    borderWidth: 3,
    borderColor: '#e1e4e8',
  },
  activeImage: {
    ...commonStyle.image,
    borderWidth: 3,
    borderColor: '#2ecc71',
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
    width: commonStyle.image.width / 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  overlayRight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: commonStyle.image.width / 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});
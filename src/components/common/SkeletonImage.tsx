import React from 'react';
import { Animated, StyleSheet } from 'react-native';

import { useSkeletonAnimation } from '@src/hooks/useSkeletonAnimation';
import { commonStyles } from '@src/utils/commonStyle';

/**
 * 画像のプレースホルダーを表示するコンポーネント
 */
export const SkeletonImage = () => {
  const { backgroundColor } = useSkeletonAnimation();
  return <Animated.View style={[styles.skeleton, { backgroundColor }]} />;
};

const styles = StyleSheet.create({
  skeleton: {
    ...commonStyles.image,
    top: 0,
    bottom: 0,
    left: 0,
    marginTop: 6,
    backgroundColor: '#e1e4e8',
  },
});

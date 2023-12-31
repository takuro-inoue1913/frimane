import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native';

import { useGetVegetableMaster } from '@src/interface/hooks/useGetVegetableMaster';
import { PlaceholderImage } from '@src/components/PlaceholderImage';

// 画面の幅を取得
const { width } = Dimensions.get('window');

export const FridgeScreen = () => {
  const { data } = useGetVegetableMaster();

  if (!data) {
    // 横に3つずつ並べるために、3つずつに分割する
    const rows = [];
    for (let i = 0; i < 20; i += 3) {
      rows.push(Array.from({ length: 3 }));
    }
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {rows.map((row, index) => (
          <View key={`row-${index}`} style={styles.row}>
            {row.map((_, index) => (
              <View key={index} style={styles.box}>
                <View
                  style={{
                    ...styles.image,
                    backgroundColor: '#e1e4e8',
                    borderRadius: 10,
                  }}
                />
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    );
  }

  // 横に3つずつ並べるために、3つずつに分割する
  const rows = [];
  for (let i = 0; i < data.length; i += 3) {
    rows.push(data.slice(i, i + 3));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {rows.map((row, index) => (
        <View key={`row-${index}`} style={styles.row}>
          {row.map((vegetable) => (
            <View key={vegetable.vegetable_id} style={styles.box}>
              <PlaceholderImage source={{ uri: vegetable.image_uri }} />
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: width,
  },
  box: {
    width: width / 3,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 10,
  },
});

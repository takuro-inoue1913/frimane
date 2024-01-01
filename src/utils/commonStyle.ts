import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  image: {
    width: width / 3 - 3,
    height: 80,
    borderRadius: 15,
  },
});
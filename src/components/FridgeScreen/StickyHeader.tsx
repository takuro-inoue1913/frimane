import React, { FC, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import {
  SelectFridgeCategory,
  selectFridgeCategoryState,
} from '@src/states/fridge';
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectDropdown from 'react-native-select-dropdown';
import { FilterForm } from '@src/components/FridgeScreen/FilterForm';
import { COMMON_COLOR_GREEN } from '@src/utils/consts';

const { width, height } = Dimensions.get('window');

type Props = {
  selectItems: SelectFridgeCategory[];
  isDisabled?: boolean;
  onPressReload?: () => Promise<void>;
  onFilterPress?: () => void;
};

/**
 * 冷蔵庫画面のヘッダーを表示するコンポーネント。
 */
export const StickyHeader: FC<Props> = ({
  selectItems,
  isDisabled,
  onPressReload,
  onFilterPress,
}) => {
  const [selectFridgeCategory, setSelectFridgeCategory] = useAtom(
    selectFridgeCategoryState,
  );
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const dropdownAnimation = useRef(new Animated.Value(0)).current;
  const rotateAnimation = useRef(new Animated.Value(0)).current;

  // ドロップダウンの表示切替
  const toggleDropdown = () => {
    // MEMO: ドロップダウンが閉じるときにキーボードを閉じる。
    if (!isDropdownVisible === false) {
      Keyboard.dismiss();
    }
    setDropdownVisible(!isDropdownVisible);
    Animated.timing(dropdownAnimation, {
      toValue: isDropdownVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setOverlayVisible(!isOverlayVisible);
  };

  const closeFilterForm = () => {
    setDropdownVisible(false);
    Animated.timing(dropdownAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setOverlayVisible(false);
    Keyboard.dismiss();
  };

  const onReload = async () => {
    rotateAnimation.setValue(0);
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => onPressReload?.());
  };

  const rotateInterpolate = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const dropdownTranslateY = dropdownAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 0],
  });

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleDropdown}>
          <Icon name="filter" size={30} color="gray" />
        </TouchableOpacity>
        <SelectDropdown
          data={selectItems}
          defaultValue={selectFridgeCategory}
          onSelect={(selectedItem) => {
            setSelectFridgeCategory(selectedItem);
          }}
          disabled={isDisabled}
          buttonStyle={styles.dropdownBtnStyle}
          buttonTextStyle={
            isDisabled
              ? styles.disabledDropdownBtnTxtStyle
              : styles.dropdownBtnTxtStyle
          }
          renderDropdownIcon={(isOpened) => {
            return (
              <Icon
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'gray'}
                size={18}
              />
            );
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdownDropdownStyle}
          rowStyle={styles.dropdownRowStyle}
          selectedRowStyle={styles.dropdownSelectRowStyle}
          rowTextStyle={styles.dropdownRowTxtStyle}
        />
        <TouchableOpacity activeOpacity={0.5} onPress={onReload}>
          <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
            <Icon name="reload" size={30} color="gray" />
          </Animated.View>
        </TouchableOpacity>
      </View>
      {isOverlayVisible && (
        <TouchableWithoutFeedback onPress={closeFilterForm}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}
      <Animated.View
        style={[
          styles.dropdownContainer,
          {
            transform: [{ translateY: dropdownTranslateY }],
            opacity: dropdownAnimation,
          },
        ]}
      >
        <FilterForm onPress={onFilterPress} />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    zIndex: 100,
  },
  iconWrapper: {
    position: 'absolute',
    right: 10,
    top: 8,
  },
  disabledIcon: {
    color: 'rgba(0,0,0,0.1)',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: height,
    left: 0,
    right: 0,
    top: 0,
    // 透過させる
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 9,
  },
  dropdownBtnStyle: {
    width: width / 1.5,
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  dropdownBtnTxtStyle: { color: '#444', textAlign: 'left' },
  disabledDropdownBtnTxtStyle: { color: 'rgba(0,0,0,0.1)', textAlign: 'left' },
  dropdownDropdownStyle: { backgroundColor: '#fff', borderRadius: 5 },
  dropdownSelectRowStyle: {
    backgroundColor: '#d2f4e8',
    borderWidth: 1,
    borderColor: COMMON_COLOR_GREEN,
  },
  dropdownRowStyle: {
    backgroundColor: 'white',
    borderBottomColor: '#ced4da',
  },
  dropdownRowTxtStyle: { color: '#444', textAlign: 'left' },
  dropdownContainer: {
    position: 'absolute',
    top: 90,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
});

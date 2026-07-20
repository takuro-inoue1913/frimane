import { useChunkedArray } from '@src/hooks/useChunkedArray';
import { selectFilterOptionsState } from '@src/states/fridge';
import { COMMON_COLOR_GREEN, FILTER_OPTIONS } from '@src/utils/consts';
import { debounce } from 'lodash';
import React, { FC, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import { useAtom } from 'jotai';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

type Props = {
  onPress?: () => void;
};

export const FilterForm: FC<Props> = ({ onPress }) => {
  const [selectFilterOptions, setSelectFilterOptionsState] = useAtom(
    selectFilterOptionsState,
  );
  const narrowDownRow = useChunkedArray(FILTER_OPTIONS.sort, 2);

  const handleNarrowDownPress = (option: string) => {
    setSelectFilterOptionsState((prev) => ({
      ...prev,
      sort: option,
    }));
    onPress?.();
  };

  const debouncedonPress = useRef(
    debounce(async () => {
      onPress?.();
    }, 1000),
  );

  const handleSearchFridgeNameChange = (text: string) => {
    setSelectFilterOptionsState((prev) => ({
      ...prev,
      searchFridgeName: text,
    }));
    debouncedonPress.current();
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="食材名で絞り込み"
          style={styles.filterFridgeNameInput}
          onChangeText={handleSearchFridgeNameChange}
          value={selectFilterOptions.searchFridgeName}
        />
        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => {
            handleSearchFridgeNameChange('');
          }}
        >
          <Icon
            style={styles.clearButton}
            name="close-circle"
            size={30}
            color="#ccc"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>並び替え</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonColumn}>
          {narrowDownRow.map((column) => (
            <View key={column[0]} style={styles.buttonContainer}>
              {column.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.button,
                    selectFilterOptions.sort === option &&
                      styles.selectedButton,
                  ]}
                  onPress={() => handleNarrowDownPress(option)}
                >
                  <Text style={styles.buttonText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    width,
  },
  filterFridgeNameInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    width: width / (2.5 / 2),
  },
  clearButton: {
    position: 'absolute',
    right: 5,
    top: 3,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonIcon: {
    height: '100%',
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonColumn: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  button: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    margin: 4,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 2.5,
  },
  buttonText: {
    fontSize: 14,
  },
  selectedButton: {
    borderColor: COMMON_COLOR_GREEN,
    backgroundColor: '#d2f4e8',
  },
});

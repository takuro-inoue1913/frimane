import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import {
  Modal,
  Animated,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Pressable,
  Alert,
} from 'react-native';
import { Image as ExpoImage } from 'expo-image';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dayjs from 'dayjs';

import { LinearGradientButton } from '@src/components/common/GradationButton';
import { useIsShowKeyboard } from '@src/hooks/useIsShowKeyboard';
import {
  FavoriteBadge,
  performLikeAnimation,
} from '@src/components/FridgeScreen/FavoriteBadge';

const { height: windowHeight } = Dimensions.get('window');

export type Props = {
  /** 対象データのID */
  id: string;
  /** モーダルを表示するかどうか */
  visible: boolean;
  /** 画像のURI */
  sourceUri: string;
  /** 画像のキャッシュキー */
  cacheKey: string;
  /** 項目名 */
  itemName: string;
  /** 在庫数 */
  quantity: number;
  /** 単位名 */
  unitName: string;
  /** 増減単位 */
  incrementalUnit: number;
  /** 賞味期限日 */
  expirationDate: string;
  /** メモ */
  memo: string;
  /** お気に入りかどうか */
  isFavorite: boolean;
  /** ユーザー独自の master かどうか */
  isCustomMaster: boolean;
  /** モーダルを閉じる時に実行する関数 */
  onClose: (editForm: FormValues) => void;
  onDelete: (id: string) => void;
};

type FormValues = {
  id: string;
  quantity: number;
  incrementalUnit: number;
  expirationDate: string;
  memo: string;
  isFavorite: boolean;
};

export type EditFormValues = {
  id: string;
  quantity: number | null;
  incrementalUnit: number | string | null;
  expirationDate: string;
  memo: string;
  isFavorite: boolean;
};

export const ItemDetailModal: FC<Props> = ({
  id,
  visible,
  sourceUri,
  itemName,
  quantity,
  unitName,
  incrementalUnit,
  expirationDate,
  memo,
  isFavorite,
  isCustomMaster,
  onClose,
  onDelete,
}) => {
  // Y軸初期位置をウィンドウの外側に設定
  const animatedY = useRef(new Animated.Value(-windowHeight)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const isShowKeyboard = useIsShowKeyboard();
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [editFormValues, setEditFormValues] = useState<EditFormValues>({
    id,
    quantity,
    incrementalUnit,
    expirationDate,
    memo,
    isFavorite,
  });

  const handleEditForm = useCallback(
    <K extends keyof EditFormValues>(key: K, value: EditFormValues[K]) => {
      setEditFormValues((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const handlePressFavoriteBadge = () => {
    performLikeAnimation({
      onPress: () => {
        handleEditForm('isFavorite', !editFormValues.isFavorite);
      },
      targetId: id,
      scale,
    });
  };

  const showDateTimePicker = () => {
    setIsDatePickerVisible(true);
  };

  const hideDateTimePicker = () => {
    setIsDatePickerVisible(false);
  };

  const handleDateTimePickerConfirm = (date: Date) => {
    handleEditForm('expirationDate', dayjs(date).format('YYYY-MM-DD'));
    hideDateTimePicker();
  };

  const handleRequestClose = useCallback(() => {
    onClose({
      ...editFormValues,
      quantity: editFormValues.quantity ?? 0,
      incrementalUnit: editFormValues.incrementalUnit
        ? Number(editFormValues.incrementalUnit)
        : 0,
      // MEMO: 期限が空の場合は今日の日付を入れる。
      expirationDate:
        editFormValues.expirationDate !== ''
          ? editFormValues.expirationDate
          : dayjs().format('YYYY-MM-DD'),
    });
  }, [editFormValues, onClose]);

  // モーダル表示アニメーション
  const startAnimation = useCallback(() => {
    Animated.timing(animatedY, {
      toValue: windowHeight / 5,
      duration: 500,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // モーダル非表示アニメーション
  const closeAnimation = useCallback(() => {
    Animated.timing(animatedY, {
      toValue: -windowHeight, // ウィンドウの外側に移動
      duration: 500,
      useNativeDriver: true,
    }).start(() => handleRequestClose());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleRequestClose]);

  const moveTopAnimation = useCallback(() => {
    Animated.timing(animatedY, {
      toValue: -1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPressTrash = () => {
    Alert.alert('削除しますか？', '項目や在庫が完全に削除されます。', [
      {
        text: 'キャンセル',
        style: 'cancel',
      },
      {
        text: '削除',
        onPress: () => onDelete(id),
      },
    ]);
  };

  useEffect(() => {
    if (isShowKeyboard) {
      moveTopAnimation();
      return;
    }
    startAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowKeyboard]);

  useEffect(() => {
    if (visible) {
      startAnimation();
    } else {
      closeAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (!visible) return <></>;

  return (
    <Modal transparent visible={visible} onRequestClose={handleRequestClose}>
      <TouchableWithoutFeedback onPress={closeAnimation}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback
            onPress={(e) => {
              e.stopPropagation();
              Keyboard.dismiss();
            }}
          >
            <Animated.View
              style={[
                styles.modalContainer,
                { transform: [{ translateY: animatedY }] },
              ]}
            >
              <View style={styles.header}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Text style={styles.headerText}>{itemName}</Text>
                </View>
                {/* TODO: 本来は編集画面に遷移して、そこで削除も編集もできるようにしたい */}
                {isCustomMaster && (
                  <TouchableOpacity
                    style={styles.trashIcon}
                    onPress={onPressTrash}
                  >
                    <Icon name="trash-can-outline" size={24} color="#fff" />
                  </TouchableOpacity>
                )}
              </View>

              <View style={styles.main}>
                <Pressable onPress={handlePressFavoriteBadge}>
                  <ExpoImage source={{ uri: sourceUri }} style={styles.image} />
                  <View style={styles.favoriteBadgeWrapper}>
                    <FavoriteBadge
                      isFavorite={editFormValues.isFavorite}
                      scale={scale}
                      size={40}
                    />
                  </View>
                </Pressable>
                <View style={styles.formContainer}>
                  <View style={styles.row}>
                    <Text style={styles.label}>{`数量（${unitName}）:`}</Text>
                    <TextInput
                      style={styles.input}
                      value={
                        editFormValues.quantity !== null &&
                        editFormValues.quantity !== undefined
                          ? editFormValues.quantity.toString()
                          : ''
                      }
                      keyboardType="numeric"
                      placeholder="100"
                      returnKeyType="done"
                      onChange={(e) =>
                        handleEditForm(
                          'quantity',
                          e.nativeEvent.text !== ''
                            ? Number(e.nativeEvent.text)
                            : null,
                        )
                      }
                    />
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.label}>増減単位:</Text>
                    <TextInput
                      style={styles.input}
                      value={
                        editFormValues.incrementalUnit
                          ? editFormValues.incrementalUnit.toString()
                          : ''
                      }
                      keyboardType="decimal-pad"
                      placeholder="100"
                      returnKeyType="done"
                      onEndEditing={(e) => {
                        handleEditForm(
                          'incrementalUnit',
                          e.nativeEvent.text !== ''
                            ? Number(e.nativeEvent.text)
                            : null,
                        );
                      }}
                      onChange={(e) => {
                        handleEditForm('incrementalUnit', e.nativeEvent.text);
                      }}
                    />
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.label}>賞味期限:</Text>
                    <TouchableOpacity
                      style={styles.inputWithIcon}
                      onPress={showDateTimePicker}
                    >
                      <Text style={styles.dateText}>
                        {editFormValues.expirationDate}
                      </Text>
                      <Icon name="chevron-down" size={24} color="gray" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.label}>メモ:</Text>
                    <TextInput
                      style={styles.textArea}
                      value={editFormValues.memo}
                      multiline
                      placeholder=""
                      onChange={(e) =>
                        handleEditForm('memo', e.nativeEvent.text)
                      }
                    />
                  </View>
                  {/* つけるかどうかは不明 */}
                  {/* <Text style={styles.label}>画像で読み取る</Text> */}
                </View>
              </View>
              <View style={styles.footer}>
                <LinearGradientButton
                  width={100}
                  height={40}
                  onPress={closeAnimation}
                >
                  <Text style={styles.closeButtonText}>閉じる</Text>
                </LinearGradientButton>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            locale="ja"
            date={dayjs(editFormValues.expirationDate).toDate()}
            onConfirm={handleDateTimePickerConfirm}
            onCancel={hideDateTimePicker}
            confirmTextIOS="決定"
            cancelTextIOS="キャンセル"
          />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    height: '65%',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  formContainer: {
    marginTop: 15,
    alignSelf: 'stretch',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
  input: {
    width: '60%',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
  textArea: {
    width: '60%',
    height: 70,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
    fontSize: 16,
    padding: 10,
  },
  footer: {
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputWithIcon: {
    flexDirection: 'row',
    width: '60%',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: {
    flex: 1,
    fontSize: 16,
    color: '#ced4da',
  },
  icon: {
    marginLeft: 10,
    fontSize: 16,
    color: 'gray',
  },
  favoriteBadgeWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  trashIcon: {
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#dc3545',
  },
});

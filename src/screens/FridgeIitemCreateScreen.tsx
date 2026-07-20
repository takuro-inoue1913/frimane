import React, { FC, useState } from 'react';
import { isEqual } from 'lodash';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Switch,
} from 'react-native';
import { Image as ExpoImage } from 'expo-image';
import { useForm, Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import { RouteProp } from '@react-navigation/native';
import { COMMON_COLOR_GREEN } from '@src/utils/consts';
import { getIncrementalUnit } from '@src/utils/logics/getIncrementalUnit';
import { LinearGradientButton } from '@src/components/common/GradationButton';
import { FridgeStock, NormalizedArray, RootStackParamList } from '@src/types';
import { useAtomValue } from 'jotai';
import { userState } from '@src/states/user';
import { vegetablesStocksState } from '@src/states/fridge/vegetables';

import { uploadUserImage } from '@src/interface/firebase/uploadUserImage';
import { useRequestInsertCustomVegetableMaster } from '@src/interface/hooks/fridge/vegetable/useRequestInsertCustomVegetableMaster';
import Toast from 'react-native-toast-message';
import { useTypedNavigation } from '@src/hooks/useTypedNavigation';
import { useRequestGetUnit } from '@src/interface/hooks/unit/useRequestGetUnit';
import { UnitMater } from '@src/states/fridge';
import { useRequestInsertCustomMeatMaster } from '@src/interface/hooks/fridge/meat/useRequestInsertCustomMeatMaster';
import { meatStocksState } from '@src/states/fridge/meat';
import { useRequestInsertCustomStapleFoodMaster } from '@src/interface/hooks/fridge/stapleFood/useRequestInsertCustomStapleFoodMaster';
import { useRequestInsertCustomSpiceMaster } from '@src/interface/hooks/fridge/spice/useRequestInsertCustomSpiceMaster';
import { useRequestInsertCustomSeasoningMaster } from '@src/interface/hooks/fridge/seasoning/useRequestInsertCustomSeasoningMaster';
import { useRequestInsertCustomProteinSourceMaster } from '@src/interface/hooks/fridge/proteinSource/useRequestInsertCustomProteinSourceMaster';
import { useRequestInsertCustomOtherMaster } from '@src/interface/hooks/fridge/other/useRequestInsertCustomOtherMaster';
import { useRequestInsertCustomFishMaster } from '@src/interface/hooks/fridge/fish/useRequestInsertCustomFishMaster';
import { useRequestInsertCustomDessertMaster } from '@src/interface/hooks/fridge/dessert/useRequestInsertCustomDessertMaster';
import { stapleFoodStocksState } from '@src/states/fridge/stapleFood';
import { spiceStocksState } from '@src/states/fridge/spice';
import { seasoningStocksState } from '@src/states/fridge/seasoning';
import { proteinSourceStocksState } from '@src/states/fridge/proteinSource';
import { otherStocksState } from '@src/states/fridge/other';
import { fishStocksState } from '@src/states/fridge/fish';
import { dessertStocksState } from '@src/states/fridge/dessert';
import { LoadingMask } from '@src/components/common/LoadingMask';
import { CameraModal } from '@src/components/common/CameraModal';
import { choosePhoto } from '@src/utils/logics/choosePhoto';

type Props = {
  route: RouteProp<RootStackParamList, '食材新規登録'>;
};

export const FridgeItemCreateScreen: FC<Props> = ({ route }) => {
  const { unitMaster } = useRequestGetUnit();
  const [isSending, setIsSending] = useState(false);
  const navigation = useTypedNavigation();
  const [visibleCameraModal, setVisibleCameraModal] = useState(false);

  const user = useAtomValue(userState);
  const vegetablesStocks = useAtomValue(vegetablesStocksState);
  const meatStocks = useAtomValue(meatStocksState);
  const stapleFoodStocks = useAtomValue(stapleFoodStocksState);
  const spiceStocks = useAtomValue(spiceStocksState);
  const seasoningStocks = useAtomValue(seasoningStocksState);
  const proteinSourceStocks = useAtomValue(proteinSourceStocksState);
  const otherStocks = useAtomValue(otherStocksState);
  const fishStocks = useAtomValue(fishStocksState);
  const dessertStocks = useAtomValue(dessertStocksState);

  const requestInsertCustomVegetableMaster =
    useRequestInsertCustomVegetableMaster();
  const requestInsertCustomMeatMaster = useRequestInsertCustomMeatMaster();
  const requestInsertCustomStapleFoodMaster =
    useRequestInsertCustomStapleFoodMaster();
  const requestInsertCustomSpiceMaster = useRequestInsertCustomSpiceMaster();
  const requestInsertCustomSeasoningMaster =
    useRequestInsertCustomSeasoningMaster();
  const requestInsertCustomProteinSourceMaster =
    useRequestInsertCustomProteinSourceMaster();
  const requestInsertCustomOtherMaster = useRequestInsertCustomOtherMaster();
  const requestInsertCustomFishMaster = useRequestInsertCustomFishMaster();
  const requestInsertCustomDessertMaster =
    useRequestInsertCustomDessertMaster();
  const {
    control,
    setValue,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm<{
    image: { uri: string } | null;
    displayName: string;
    nameKana: string;
    expiryPeriod: string;
    incrementUnit: string;
    unit: UnitMater;
    isFavorite: boolean;
  }>();

  const handleTakePhoto = () => {
    setVisibleCameraModal(true);
  };

  const handleUnitChange = (
    item: { id: number; name: string },
    // MEMO: react-hook-form の field.onChange の型に合わせるため。
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (...event: any[]) => void,
  ) => {
    setValue('unit', item);
    setValue('incrementUnit', String(getIncrementalUnit(item.name)));
    onChange(item);
  };

  const checkFormValid = (
    fridgeStocks: NormalizedArray<FridgeStock>,
  ): boolean => {
    let isValid = true;
    fridgeStocks.ids.forEach((id) => {
      if (fridgeStocks.byId[id].name === getValues('nameKana')) {
        setError('nameKana', {
          type: 'manual',
          message: '同じ名前の食材が既に登録されています。',
        });
        isValid = false;
      }
      if (fridgeStocks.byId[id].displayName === getValues('displayName')) {
        setError('displayName', {
          type: 'manual',
          message: '同じ表示名の食材が既に登録されています。',
        });
        isValid = false;
      }
    });
    return isValid;
  };

  const onSubmit = async () => {
    setIsSending(true);
    let result = null;

    switch (route.params.fridgeCategory) {
      case '野菜類': {
        if (!checkFormValid(vegetablesStocks)) {
          setIsSending(false);
          return;
        }
        const imageUri = await uploadUserImage(
          getValues('image.uri'),
          'user-custom-images/' + user?.uid,
        );
        result = await requestInsertCustomVegetableMaster({
          displayName: getValues('displayName'),
          vegetableName: getValues('nameKana'),
          imageUri,
          defaultExpirationPeriod: Number(getValues('expiryPeriod')),
          unitId: getValues('unit.id'),
          isFavorite: getValues('isFavorite'),
          incrementUnit: Number(getValues('incrementUnit')),
        });
        break;
      }
      case '肉類': {
        if (!checkFormValid(meatStocks)) {
          setIsSending(false);
          return;
        }
        const imageUri = await uploadUserImage(
          getValues('image.uri'),
          'user-custom-images/' + user?.uid,
        );
        result = await requestInsertCustomMeatMaster({
          displayName: getValues('displayName'),
          meatName: getValues('nameKana'),
          imageUri,
          defaultExpirationPeriod: Number(getValues('expiryPeriod')),
          unitId: getValues('unit.id'),
          isFavorite: getValues('isFavorite'),
          incrementalUnit: Number(getValues('incrementUnit')),
        });
        break;
      }
      case '主食・粉': {
        if (!checkFormValid(stapleFoodStocks)) {
          setIsSending(false);
          return;
        }
        const imageUri = await uploadUserImage(
          getValues('image.uri'),
          'user-custom-images/' + user?.uid,
        );
        result = await requestInsertCustomStapleFoodMaster({
          displayName: getValues('displayName'),
          stapleFoodName: getValues('nameKana'),
          imageUri,
          defaultExpirationPeriod: Number(getValues('expiryPeriod')),
          unitId: getValues('unit.id'),
          isFavorite: getValues('isFavorite'),
          incrementalUnit: Number(getValues('incrementUnit')),
        });
        break;
      }
      case 'スパイス': {
        if (!checkFormValid(spiceStocks)) {
          setIsSending(false);
          return;
        }
        const imageUri = await uploadUserImage(
          getValues('image.uri'),
          'user-custom-images/' + user?.uid,
        );
        result = await requestInsertCustomSpiceMaster({
          displayName: getValues('displayName'),
          spiceName: getValues('nameKana'),
          imageUri,
          defaultExpirationPeriod: Number(getValues('expiryPeriod')),
          unitId: getValues('unit.id'),
          isFavorite: getValues('isFavorite'),
          incrementalUnit: Number(getValues('incrementUnit')),
        });
        break;
      }
      case '卵・乳・豆': {
        if (!checkFormValid(proteinSourceStocks)) {
          setIsSending(false);
          return;
        }
        const imageUri = await uploadUserImage(
          getValues('image.uri'),
          'user-custom-images/' + user?.uid,
        );
        result = await requestInsertCustomProteinSourceMaster({
          displayName: getValues('displayName'),
          proteinSourceName: getValues('nameKana'),
          imageUri,
          defaultExpirationPeriod: Number(getValues('expiryPeriod')),
          unitId: getValues('unit.id'),
          isFavorite: getValues('isFavorite'),
          incrementalUnit: Number(getValues('incrementUnit')),
        });
        break;
      }
      case '調味料': {
        if (!checkFormValid(seasoningStocks)) {
          setIsSending(false);
          return;
        }
        const imageUri = await uploadUserImage(
          getValues('image.uri'),
          'user-custom-images/' + user?.uid,
        );
        result = await requestInsertCustomSeasoningMaster({
          displayName: getValues('displayName'),
          seasoningName: getValues('nameKana'),
          imageUri,
          defaultExpirationPeriod: Number(getValues('expiryPeriod')),
          unitId: getValues('unit.id'),
          isFavorite: getValues('isFavorite'),
          incrementalUnit: Number(getValues('incrementUnit')),
        });
        break;
      }
      case '魚介類': {
        if (!checkFormValid(fishStocks)) {
          setIsSending(false);
          return;
        }
        const imageUri = await uploadUserImage(
          getValues('image.uri'),
          'user-custom-images/' + user?.uid,
        );
        result = await requestInsertCustomFishMaster({
          displayName: getValues('displayName'),
          fishName: getValues('nameKana'),
          imageUri,
          defaultExpirationPeriod: Number(getValues('expiryPeriod')),
          unitId: getValues('unit.id'),
          isFavorite: getValues('isFavorite'),
          incrementalUnit: Number(getValues('incrementUnit')),
        });
        break;
      }
      case 'デザート': {
        if (!checkFormValid(dessertStocks)) {
          setIsSending(false);
          return;
        }
        const imageUri = await uploadUserImage(
          getValues('image.uri'),
          'user-custom-images/' + user?.uid,
        );
        result = await requestInsertCustomDessertMaster({
          displayName: getValues('displayName'),
          dessertName: getValues('nameKana'),
          imageUri,
          defaultExpirationPeriod: Number(getValues('expiryPeriod')),
          unitId: getValues('unit.id'),
          isFavorite: getValues('isFavorite'),
          incrementalUnit: Number(getValues('incrementUnit')),
        });
        break;
      }
      case 'その他': {
        if (!checkFormValid(otherStocks)) {
          setIsSending(false);
          return;
        }
        const imageUri = await uploadUserImage(
          getValues('image.uri'),
          'user-custom-images/' + user?.uid,
        );

        result = await requestInsertCustomOtherMaster({
          displayName: getValues('displayName'),
          otherName: getValues('nameKana'),
          imageUri,
          defaultExpirationPeriod: Number(getValues('expiryPeriod')),
          unitId: getValues('unit.id'),
          incrementalUnit: Number(getValues('incrementUnit')),
          isFavorite: getValues('isFavorite'),
        });
        break;
      }
      default:
        break;
    }
    if (!result) {
      setIsSending(false);
      return;
    }
    setIsSending(false);

    Toast.show({
      type: 'success',
      text1: `「${getValues('displayName')}」を登録しました。`,
    });
    navigation.navigate('冷蔵庫管理');
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={'position'}
          contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          style={styles.container}
        >
          {isSending && <LoadingMask />}
          <View
            style={errors.image ? styles.formItemHasError : styles.formItem}
          >
            <Controller
              control={control}
              name="image"
              rules={{ required: '画像は必須です。' }}
              render={({ field: { value, onChange } }) => (
                <TouchableOpacity
                  onPress={() => choosePhoto(onChange, handleTakePhoto)}
                  style={styles.imageUploader}
                >
                  {value ? (
                    <ExpoImage
                      source={{ uri: value.uri }}
                      style={styles.imagePreview}
                    />
                  ) : (
                    <View>
                      <Text>
                        <Icon name="image-plus" style={styles.icon} />
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              )}
            />
            {errors.image && (
              <Text style={styles.errorText}>{errors.image.message}</Text>
            )}
          </View>
          <View
            style={
              errors.displayName ? styles.formItemHasError : styles.formItem
            }
          >
            <Controller
              control={control}
              name="displayName"
              rules={{
                required: '表示名は必須です。',
                maxLength: {
                  value: 8,
                  message: '表示名は8文字以内で入力してください。',
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  accessibilityLabel="表示名"
                  value={value}
                  returnKeyType="done"
                  placeholder="表示名 ※ リストに表示されます"
                />
              )}
            />
            {errors.displayName && (
              <Text style={styles.errorText}>{errors.displayName.message}</Text>
            )}
          </View>
          <View
            style={errors.nameKana ? styles.formItemHasError : styles.formItem}
          >
            <Controller
              control={control}
              name="nameKana"
              rules={{
                required: '名前は必須です。',
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  returnKeyType="done"
                  placeholder="名前 ※ 絞込や検索に使用します"
                />
              )}
            />
            {errors.nameKana && (
              <Text style={styles.errorText}>{errors.nameKana.message}</Text>
            )}
          </View>
          <View
            style={
              errors.expiryPeriod ? styles.formItemHasError : styles.formItem
            }
          >
            <Controller
              control={control}
              name="expiryPeriod"
              rules={{
                required: '賞味期限の基本期間は必須です。',
                pattern: {
                  value: /^\d+$/,
                  message: '賞味期限の基本期間は数値のみで入力してください。',
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="賞味期限期間 (日数)"
                  returnKeyType="done"
                  keyboardType="numeric"
                />
              )}
            />
            {errors.expiryPeriod && (
              <Text style={styles.errorText}>
                {errors.expiryPeriod.message}
              </Text>
            )}
          </View>
          <View style={errors.unit ? styles.formItemHasError : styles.formItem}>
            <Controller
              control={control}
              name="unit"
              rules={{
                required: '単位名は必須です。',
              }}
              render={({ field: { onChange, value } }) => (
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.dropdownPlaceholderStyle}
                  selectedTextStyle={styles.dropdownSelectedTextStyle}
                  iconStyle={styles.dropdownIconStyle}
                  data={unitMaster}
                  maxHeight={150}
                  labelField="name"
                  valueField="id"
                  placeholder="単位名 ※ 自動で増減単位が設定されます"
                  searchPlaceholder="単位名を検索"
                  value={value}
                  onChange={(item) => handleUnitChange(item, onChange)}
                  renderItem={(item) => {
                    return (
                      <View style={styles.dropdownItem}>
                        <Text style={styles.dropdownTextItem}>{item.name}</Text>
                        {isEqual(item, value) && (
                          <Icon
                            name="check"
                            style={styles.dropdownItemIcon}
                            size={20}
                            color={COMMON_COLOR_GREEN}
                          />
                        )}
                      </View>
                    );
                  }}
                />
              )}
            />
            {errors.unit && (
              <Text style={styles.errorText}>{errors.unit.message}</Text>
            )}
          </View>
          <View
            style={
              errors.incrementUnit ? styles.formItemHasError : styles.formItem
            }
          >
            <Controller
              control={control}
              name="incrementUnit"
              rules={{
                required: '増減単位は必須です。',
                pattern: {
                  value: /^\d+(\.\d+)?$/,
                  message: '増減単位は数値のみで入力してください。',
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="増減単位 ※ 在庫の増減量になります"
                  keyboardType="numeric"
                  returnKeyType="done"
                />
              )}
            />
            {errors.incrementUnit && (
              <Text style={styles.errorText}>
                {errors.incrementUnit.message}
              </Text>
            )}
          </View>
          <Controller
            control={control}
            name="isFavorite"
            render={({ field: { onChange, value } }) => (
              <View style={styles.favoriteToggleContainer}>
                <Text style={styles.favoriteToggleLabel}>
                  お気に入りに登録する
                </Text>
                <Switch
                  trackColor={{ false: '#ced4da', true: COMMON_COLOR_GREEN }}
                  ios_backgroundColor="#ced4da"
                  onValueChange={onChange}
                  value={value}
                />
              </View>
            )}
          />
          <View style={styles.submitButtonWrapper}>
            <LinearGradientButton
              width={250}
              disabled={isSending}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={{ color: 'white' }}>
                {isSending ? '登録中...' : '登録'}
              </Text>
            </LinearGradientButton>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <CameraModal
        visible={visibleCameraModal}
        onClose={() => setVisibleCameraModal(false)}
        onTakePicture={(uri) => {
          setValue('image', { uri });
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formItem: {
    marginBottom: 26,
    alignItems: 'center',
    width: '100%',
  },
  formItemHasError: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 4,
  },
  imageUploader: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#e1e4e8',
    borderStyle: 'dotted',
    backgroundColor: 'transparent',
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  imagePreview: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
  errorText: {
    marginTop: 5,
    color: '#dc3545',
  },
  icon: {
    fontSize: 80,
    color: '#e1e4e8',
  },
  submitButtonWrapper: {
    padding: 10,
  },
  dropdown: {
    width: '80%',
    height: 42,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  dropdownItem: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownTextItem: {
    flex: 1,
    fontSize: 16,
  },
  dropdownPlaceholderStyle: {
    fontSize: 16,
    color: '#ced4da',
  },
  dropdownSelectedTextStyle: {
    fontSize: 16,
  },
  dropdownIconStyle: {
    width: 20,
    height: 20,
  },
  dropdownItemIcon: {
    marginRight: 5,
  },
  loadingMask: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  favoriteToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 8,
    width: '60%',
  },
  favoriteToggleLabel: {
    fontSize: 16,
    marginRight: 10,
    color: '#495057',
  },
});

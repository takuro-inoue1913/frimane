import React, { FC, useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Image as ExpoImage } from 'expo-image';
import { useForm, Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradientButton } from '@src/components/common/GradationButton';
import { LoadingMask } from '@src/components/common/LoadingMask';
import { CameraModal } from '@src/components/common/CameraModal';
import { COMMON_COLOR_GREEN } from '@src/utils/consts';
import { Dropdown } from 'react-native-element-dropdown';
import { uploadUserImage } from '@src/interface/firebase/uploadUserImage';
import { deleteUserImage } from '@src/interface/firebase/deleteUserImage';
import { userState } from '@src/states/user';
import { useAtomValue } from 'jotai';
import { useTypedNavigation } from '@src/hooks/useTypedNavigation';
import Toast from 'react-native-toast-message';
import { useRecipesActions } from '@src/states/recipe/actions';
import { fridgeMasterState } from '@src/states/fridge';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/types';
import { recipesState } from '@src/states/recipe';
import { useRequestUpdateRecipe } from '@src/interface/hooks/recipe/useRequestUpdateRecipe';
import { choosePhoto } from '@src/utils/logics/choosePhoto';

const { width: windowWidth } = Dimensions.get('window');

type DropdownData = {
  label: string;
  value: string;
  searchKey: string;
  unit: {
    name: string;
    quantity: number;
    hasStock: boolean;
  };
};

type Materials = {
  [index: number]: {
    fridgeMasterId: string;
    unitName: string;
    quantity: string;
  };
};

type Props = {
  route: RouteProp<RootStackParamList, 'レシピ編集'>;
};

export const RecipeEditScreen: FC<Props> = ({ route }) => {
  const fridgeMaster = useAtomValue(fridgeMasterState);
  const recipes = useAtomValue(recipesState);
  const requestUpdateRecipe = useRequestUpdateRecipe();
  const { updateRecipe } = useRecipesActions();
  const navigation = useTypedNavigation();
  const user = useAtomValue(userState);
  const { recipeId } = route.params;
  const targetRecipe = recipes.byId[recipeId];

  const [isSending, setIsSending] = useState(false);
  const [visibleCameraModal, setVisibleCameraModal] = useState(false);
  const [keyboardShouldPersist, setKeyboardShouldPersist] = useState(false);
  const [dropdownList, setDropdownList] = useState<DropdownData[][]>([]);
  const {
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    image: { uri: string } | null;
    recipeName: string;
    materials: {
      [index: number]: {
        fridgeMasterId: string;
        unitName: string;
        quantity: string;
      };
    };
    description: string;
  }>({
    defaultValues: {
      image: { uri: targetRecipe.imageUri },
      recipeName: targetRecipe.name,
      materials: targetRecipe.materials.reduce((acc, material, index) => {
        acc[index] = {
          fridgeMasterId: material.masterId,
          unitName:
            fridgeMaster.find((item) => item.id === material.masterId)
              ?.unitName || '',
          quantity: material.quantity.toString(),
        };
        return acc;
      }, {} as Materials),
      description: targetRecipe.descriptions[0],
    },
  });

  const dropdownData = useMemo<DropdownData[]>(() => {
    return fridgeMaster.map((item) => ({
      label: item.displayName,
      value: item.id,
      unit: {
        name: item.unitName,
        quantity: item.quantity,
        hasStock: item.hasStock,
      },
      searchKey: `${item.displayName} ${item.name}`,
    }));
  }, [fridgeMaster]);

  useEffect(() => {
    if (recipes.ids.length !== 0) {
      setDropdownList(
        Object.values(getValues('materials')).map(() => dropdownData),
      );
    }
  }, [getValues, recipes.ids.length, dropdownData, setDropdownList]);

  const addDropdownItem = () => {
    setDropdownList([...dropdownList, dropdownData]);
  };

  const handleChangeDropdownValue = (
    data: DropdownData,
    targetIndex: number,
  ) => {
    const _materials = getValues('materials');
    _materials[targetIndex] = {
      fridgeMasterId: data.value,
      quantity: '',
      unitName: data.unit.name,
    };
    setValue('materials', { ..._materials });
  };

  const handlePressDeleteDropdownItem = (targetIndex: number) => {
    const _materials = getValues('materials');
    delete _materials[targetIndex];
    setValue(
      'materials',
      Object.values(_materials).reduce(
        (acc, material, index) => {
          acc[index] = material;
          return acc;
        },
        {} as typeof _materials,
      ),
    );
    setDropdownList((prev) => {
      const _prev = [...prev];
      _prev.splice(targetIndex, 1);
      return _prev;
    });
  };

  const handleChangeQuantity = (value: string, targetIndex: number) => {
    const _materials = getValues('materials');
    _materials[targetIndex].quantity = value;
    setValue('materials', _materials);
  };

  const handleTakePhoto = () => {
    setVisibleCameraModal(true);
  };

  const onSubmit = async () => {
    setIsSending(true);

    let imageUri = targetRecipe.imageUri;
    if (getValues('image.uri') !== targetRecipe.imageUri) {
      await deleteUserImage(targetRecipe.imageUri);
      imageUri = await uploadUserImage(
        getValues('image.uri'),
        'user-recipes/' + user?.uid,
      );
    }
    const result = await requestUpdateRecipe({
      recipeId,
      recipeName: getValues('recipeName'),
      recipeImage: imageUri,
      materials: Object.values(getValues('materials')).map((item) => ({
        masterId: item.fridgeMasterId,
        quantity: Number(item.quantity),
      })),
      descriptions: [getValues('description')],
    });
    if (!result) {
      setIsSending(false);
      return;
    }
    updateRecipe({
      id: result.recipeId,
      name: result.recipeName,
      imageUri: result.imageUri,
      materials: result.materials,
      descriptions: result.descriptions,
    });
    setIsSending(false);
    Toast.show({
      type: 'success',
      text1: `${getValues('recipeName')}のレシピを更新しました`,
    });
    navigation.navigation.goBack();
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={'position'}
          enabled={!keyboardShouldPersist}
          contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: 20,
          }}
          style={styles.container}
        >
          {isSending && <LoadingMask />}
          <View
            style={
              errors.recipeName ? styles.formItemHasError : styles.formItem
            }
          >
            <Controller
              control={control}
              name="recipeName"
              rules={{
                required: 'レシピ名は必須です。',
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={() => {
                    setKeyboardShouldPersist(false);
                    onBlur();
                  }}
                  onFocus={() => setKeyboardShouldPersist(true)}
                  onChangeText={onChange}
                  accessibilityLabel="レシピ名"
                  value={value}
                  returnKeyType="done"
                  placeholder="レシピ名"
                />
              )}
            />
            {errors.recipeName && (
              <Text style={styles.errorText}>{errors.recipeName.message}</Text>
            )}
          </View>
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
          <View style={styles.labelSection}>
            <Text style={styles.label}>材料</Text>
          </View>
          <Controller
            control={control}
            name="materials"
            rules={{
              validate: (value) => {
                if (Object.keys(value).length === 0) {
                  return '材料は1つ以上必要です。';
                }
                if (Object.values(value).some((item) => !item.fridgeMasterId)) {
                  return '材料を選択していない項目があります。';
                }
                if (
                  Object.values(value).some(
                    (item) => !item.quantity || item.quantity === '0',
                  )
                ) {
                  return '数量を入力していない項目があります。';
                }
                return true;
              },
            }}
            render={({ field: { value } }) => (
              <>
                {dropdownList.map((dropdownItemData, index) => (
                  <View key={index} style={styles.selectFridgeMasterWrapper}>
                    <TouchableOpacity
                      style={styles.trashIcon}
                      onPress={() => handlePressDeleteDropdownItem(index)}
                    >
                      <Icon name="close" size={10} color="#fff" />
                    </TouchableOpacity>
                    <View style={styles.dropdownWrapper}>
                      <Dropdown
                        data={dropdownItemData}
                        value={value[index]?.fridgeMasterId || null}
                        onChange={(data) =>
                          handleChangeDropdownValue(data, index)
                        }
                        labelField="label"
                        valueField="value"
                        searchField="searchKey"
                        placeholder="食材を選択"
                        search
                        renderInputSearch={(onSearch) => (
                          <TextInput
                            placeholder="検索..."
                            onChangeText={onSearch}
                            returnKeyType="search"
                            style={styles.dropdownInput}
                          />
                        )}
                        style={styles.dropdown}
                        maxHeight={160}
                        renderItem={(item) => {
                          return (
                            <View
                              key={item.searchKey}
                              style={styles.dropdownItem}
                            >
                              <Text style={styles.dropdownTextItem}>
                                {item.label}
                              </Text>
                            </View>
                          );
                        }}
                      />
                    </View>
                    <View style={styles.materialsInputWrapper}>
                      <TextInput
                        style={[
                          styles.materialsUnitInput,
                          value[index]?.fridgeMasterId
                            ? {}
                            : { backgroundColor: '#f8f9fa' },
                        ]}
                        onChangeText={(text) =>
                          handleChangeQuantity(text, index)
                        }
                        accessibilityLabel="数量"
                        value={value[index]?.quantity.toString() || ''}
                        returnKeyType="done"
                        keyboardType="numeric"
                        blurOnSubmit={false}
                        onSubmitEditing={Keyboard.dismiss}
                        editable={value[index]?.fridgeMasterId ? true : false}
                      />
                      <Text style={{ fontSize: 10 }}>
                        {value[index]?.unitName || ''}
                      </Text>
                    </View>
                  </View>
                ))}
              </>
            )}
          />
          <TouchableOpacity
            aria-label="button"
            style={styles.plusButton}
            onPress={addDropdownItem}
          >
            <Icon name="plus" style={styles.plusIcon} />
            <Text style={styles.plusText}>材料を追加</Text>
          </TouchableOpacity>
          {errors.materials && (
            <Text style={styles.errorText}>{errors.materials.message}</Text>
          )}
          <View style={styles.labelSection}>
            <Text style={styles.label}>作り方</Text>
          </View>
          <View
            style={[
              styles.descriptionWrapper,
              errors.description ? styles.formItemHasError : {},
            ]}
          >
            <Controller
              control={control}
              name="description"
              rules={{
                required: '作り方は必須です。',
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.descriptionInput}
                  multiline
                  onBlur={onBlur}
                  onChangeText={onChange}
                  accessibilityLabel="作り方"
                  value={value}
                />
              )}
            />
            {errors.description && (
              <Text style={styles.errorText}>{errors.description.message}</Text>
            )}
          </View>
          <View style={styles.submitButtonWrapper}>
            <LinearGradientButton
              width={250}
              disabled={isSending}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={{ color: 'white' }}>
                {isSending ? '保存中...' : '保存'}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  labelSection: {
    padding: 10,
    backgroundColor: '#f8f9fa',
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#495057',
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
    width: windowWidth - 40,
    height: 200,
    borderRadius: 15,
  },
  imagePreview: {
    width: windowWidth - 40,
    height: 200,
    borderRadius: 15,
  },
  input: {
    width: windowWidth - 40,
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
  plusButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    fontSize: 80,
    color: '#e1e4e8',
  },
  plusText: {
    fontSize: 16,
    color: COMMON_COLOR_GREEN,
  },
  plusIcon: {
    fontSize: 22,
    color: COMMON_COLOR_GREEN,
  },
  submitButtonWrapper: {
    padding: 20,
  },
  selectFridgeMasterWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 10,
    width: windowWidth - 20,
  },
  trashIcon: {
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#dc3545',
  },
  dropdownWrapper: {
    flex: 6,
  },
  materialsInputWrapper: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  materialsUnitInput: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    width: 100,
  },
  dropdown: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    borderWidth: 0.5,
    padding: 10,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  dropdownItem: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownTextItem: {
    flex: 1,
    fontSize: 16,
  },
  dropdownInput: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    padding: 10,
    fontSize: 16,
  },
  descriptionWrapper: {
    marginTop: 10,
  },
  descriptionInput: {
    width: windowWidth - 40,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    height: 140,
  },
});

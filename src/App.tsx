import React, { FC, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';
import { Platform, StyleSheet, View } from 'react-native';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';

import { HomeScreen } from '@src/screens/HomeScreen';
import { RegisterScreen } from '@src/screens/RegisterScreen';
import { LoginScreen } from '@src/screens/LoginScreen';
import { auth } from '@src/utils/firebaseSettings';
import { userState, idTokenState } from '@src/states/user';
import { LoadingScreen } from '@src/screens/LoadingScreen';
import { PasswordResetScreen } from '@src/screens/PasswordResetScreen';
import { FridgeScreen } from '@src/screens/FridgeScreen';
import { COMMON_COLOR_BLUE, COMMON_COLOR_GREEN } from '@src/utils/consts';
import { FridgeItemCreateScreen } from '@src/screens/FridgeIitemCreateScreen';
import { RootStackParamList } from '@src/types';
import { ShoppingMemoScreen } from '@src/screens/ShoppingMemoScreen';
import { DailyRecipeScreen } from '@src/screens/DailyRecipeScreen';
import { RecipeCreateScreen } from './screens/RecipeCreateScreen';
import { AddMissingMaterialsScreen } from './screens/AddMissingMaterialsScreen';
import { RecipeDetailScreen } from './screens/RecipeDetailScreen';
import { RecipeListScreen } from './screens/RecipeLIstScreen';
import { RecipeEditScreen } from './screens/RecipeEditScreen';

export const App: FC = () => {
  const setUser = useSetRecoilState(userState);
  const [idToken, setIdToken] = useRecoilState(idTokenState);
  const [initializing, setInitializing] = useState(true);
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const unitId = __DEV__
    ? TestIds.BANNER
    : Platform.select({
        ios: 'ca-app-pub-1013230797140961/5537108885',
        // 未設定
        android: 'ca-app-pub-xxxxxxxxxxxx/yyyyyyyyyy',
      }) ?? TestIds.BANNER;

  useEffect(() => {
    let settled = false;

    const applyUser = (user: typeof auth.currentUser) => {
      if (user) {
        user.getIdToken().then((idToken: string) => setIdToken(idToken));
        // MEMO: user は Object.freeze() されているため、setUser で更新するときは新しいオブジェクトを渡す必要がある。
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber,
          providerId: user.providerId,
        });
      } else {
        setUser(null);
        setIdToken(null);
      }
    };

    // onAuthStateChanged の発火 or タイムアウトのどちらか一度だけ初期化を完了させる。
    const settle = (user: typeof auth.currentUser) => {
      if (settled) return;
      settled = true;
      applyUser(user);
      setInitializing(false);
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => settle(user));

    // 安全策: firebase 初期化(トークン更新等のネットワーク要求)がハングしても
    // 無限ローディングにならないよう、一定時間で auth.currentUser を使って先へ進める。
    // currentUser があればログイン状態を維持でき、不要な再ログインを避けられる。
    const fallbackTimer = setTimeout(() => {
      if (!settled) {
        console.warn(
          `[auth] onAuthStateChanged が8秒以内に未発火。currentUser で継続 (currentUser: ${!!auth.currentUser})`,
        );
        settle(auth.currentUser);
      }
    }, 8000);

    return () => {
      clearTimeout(fallbackTimer);
      unsubscribe();
    };
  }, [setIdToken, setUser]);

  if (initializing) return <LoadingScreen />;

  const LoginStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ログイン" component={LoginScreen} />
        <Stack.Screen
          name="パスワードリセット"
          component={PasswordResetScreen}
        />
      </Stack.Navigator>
    );
  };

  const RecipeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="毎日のレシピ" component={DailyRecipeScreen} />
        <Stack.Screen name="レシピ新規登録" component={RecipeCreateScreen} />
        <Stack.Screen name="レシピ詳細" component={RecipeDetailScreen} />
        <Stack.Screen
          name="追加する材料"
          component={AddMissingMaterialsScreen}
        />
      </Stack.Navigator>
    );
  };

  const FridgeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="冷蔵庫管理" component={FridgeScreen} />
        <Stack.Screen name="食材新規登録" component={FridgeItemCreateScreen} />
      </Stack.Navigator>
    );
  };

  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="マイページ" component={HomeScreen} />
        <Stack.Screen name="レシピ一覧" component={RecipeListScreen} />
        <Stack.Screen name="レシピ編集" component={RecipeEditScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => {
              let iconName = '';
              if (route.name === 'myPage') {
                iconName = 'home';
              } else if (route.name === 'RecipeStack') {
                iconName = 'chef-hat';
              } else if (route.name === '買い物メモ') {
                iconName = 'cart-outline';
              } else if (route.name === 'FridgeStack') {
                iconName = 'fridge';
              } else if (route.name === 'LoginStack') {
                iconName = 'login';
              } else if (route.name === '新規登録') {
                iconName = 'account-plus';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: COMMON_COLOR_GREEN,
            tabBarInactiveTintColor: COMMON_COLOR_BLUE,
          })}
        >
          {idToken ? (
            <>
              <Tab.Screen
                name="FridgeStack"
                options={{ headerShown: false }}
                component={FridgeStack}
              />
              <Tab.Screen name="買い物メモ" component={ShoppingMemoScreen} />
              <Tab.Screen
                name="RecipeStack"
                options={{ headerShown: false }}
                component={RecipeStack}
              />
              <Tab.Screen
                name="myPage"
                options={{ headerShown: false }}
                component={HomeStack}
              />
            </>
          ) : (
            <>
              <Tab.Screen
                name="LoginStack"
                options={{ headerShown: false }}
                component={LoginStack}
              />
              <Tab.Screen name="新規登録" component={RegisterScreen} />
            </>
          )}
        </Tab.Navigator>
        <View style={styles.bannerContainer}>
          <BannerAd
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            unitId={unitId}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
        <Toast topOffset={100} />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff', // 任意で背景色を設定
  },
});

import React, { FC, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';

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
import { RecipeScreen } from '@src/screens/RecipeScreen';
import { RecipeCreateScreen } from './screens/RecipeCreateScreen';

export const App: FC = () => {
  const setUser = useSetRecoilState(userState);
  const [idToken, setIdToken] = useRecoilState(idTokenState);
  const [initializing, setInitializing] = useState(true);
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
      setInitializing(false);
    });
    return () => unsubscribe();
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
        <Stack.Screen name="レシピ" component={RecipeScreen} />
        <Stack.Screen name="レシピ新規登録" component={RecipeCreateScreen} />
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

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => {
            let iconName = '';
            if (route.name === 'マイページ') {
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
            <Tab.Screen name="マイページ" component={HomeScreen} />
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
      <Toast topOffset={100} />
    </NavigationContainer>
  );
};

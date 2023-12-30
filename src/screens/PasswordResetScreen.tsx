import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@src/utils/firebaseAuth';
import Toast from 'react-native-toast-message';

import { GradientionTextInput } from '@src/components/GradientionTextInput';
import { LinearGradientButton } from '@src/components/GradationButton';

export const PasswordResetScreen = () => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Toast.show({
          type: 'success',
          text1: 'メールを送信しました',
          text2: 'メールを確認してパスワードをリセットしてください',
        });
      })
      .catch((error) => {
        Toast.show({
          type: 'error',
          text1: 'メール送信に失敗しました',
          text2: error.message,
        });
      });
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      <View style={{ marginBottom: 20 }}>
        <GradientionTextInput
          style={{ width: 250 }}
          onChangeText={setEmail}
          value={email}
          placeholder="メールアドレスを入力してください"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View>
        <LinearGradientButton width={250} onPress={handlePasswordReset}>
          <Text style={{ color: 'white' }}>メール送信</Text>
        </LinearGradientButton>
      </View>
    </View>
  );
};
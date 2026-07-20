import React, { FC } from 'react';
import { Provider } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from '@src/App';

import '@src/utils/dayjsConfig';
import { LogBox } from 'react-native';

/**
 * App.tsxのラッパー。
 * MEMO: App.tsx で jotai の atom を使用しているため、一階層上で Provider でラップする。
 */
export const AppWrapper: FC = () => {
  // MEMO: 最初のキャシュがない画像読み込みの時に出る警告を無視する。
  LogBox.ignoreLogs([/Could not find image file/]);

  const queryClient = new QueryClient();

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  );
};

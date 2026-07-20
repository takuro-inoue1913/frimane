module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
          safe: true,
        },
      ],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@src': './src',
            // recoil は React 19 非互換 (開発終了) のため、jotai バックエンドの
            // 互換 shim へ解決させる。詳細は src/lib/recoilShim.tsx を参照。
            '^recoil$': './src/lib/recoilShim',
          },
        },
      ],
    ],
  };
};

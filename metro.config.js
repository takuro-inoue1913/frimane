// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// MEMO: Expo SDK 53+ で既定有効になった package exports 解決は、
// firebase 等の一部ライブラリで ESM/CJS 相互運用エラー
// ("Cannot assign to property 'default'") を起こすため無効化する。
// firebase は package.json の "react-native" フィールド経由で
// RN 向けビルドが解決される。
config.resolver.unstable_enablePackageExports = false;

module.exports = config;

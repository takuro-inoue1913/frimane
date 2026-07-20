/**
 * recoil 互換 shim (jotai バックエンド)
 *
 * recoil 0.7.7 は React 19 で削除された内部API (ReactCurrentDispatcher) に
 * 依存しており動作しない。かつ Meta により開発終了済み。
 * 本 shim は当プロジェクトで使用している recoil の API サーフェスのみを
 * jotai で再実装し、babel-plugin-module-resolver の alias 経由で
 * `import ... from 'recoil'` を本ファイルに解決させることで、
 * アプリ側 109 ファイルを無修正のまま React 19 対応する。
 *
 * 対応API: atom / selector / useRecoilState / useRecoilValue /
 *          useSetRecoilState / useRecoilCallback / useRecoilSnapshot / RecoilRoot
 */
import React, { useCallback } from 'react';
import {
  atom as jotaiAtom,
  useAtom,
  useAtomValue,
  useSetAtom,
  useStore,
  Provider,
  type Atom,
  type WritableAtom,
} from 'jotai';

type Getter = <T>(a: Atom<T>) => T;

// ---- atom({ key, default }) → jotai の書き込み可能 atom ----
export function atom<T>(config: { key?: string; default: T }): WritableAtom<
  T,
  [T | ((prev: T) => T)],
  void
> {
  const a = jotaiAtom(config.default) as unknown as WritableAtom<
    T,
    [T | ((prev: T) => T)],
    void
  >;
  if (config.key) (a as { debugLabel?: string }).debugLabel = config.key;
  return a;
}

// ---- selector({ key, get }) → jotai の読み取り専用 atom ----
export function selector<T>(config: {
  key?: string;
  get: (opts: { get: Getter }) => T;
}): Atom<T> {
  const a = jotaiAtom((get) => config.get({ get: get as Getter }));
  if (config.key) (a as { debugLabel?: string }).debugLabel = config.key;
  return a;
}

// ---- 基本フック ----
export const useRecoilValue = <T,>(a: Atom<T>): T => useAtomValue(a);
export const useRecoilState = <T,>(
  a: WritableAtom<T, [T | ((prev: T) => T)], void>,
) => useAtom(a);
export const useSetRecoilState = <T,>(
  a: WritableAtom<T, [T | ((prev: T) => T)], void>,
) => useSetAtom(a);

// ---- snapshot 相当 (getPromise が主用途、他はデバッグ用) ----
type JotaiStore = ReturnType<typeof useStore>;

const makeSnapshot = (store: JotaiStore) => ({
  getPromise: <T,>(a: Atom<T>): Promise<T> => Promise.resolve(store.get(a)),
  getLoadable: <T,>(a: Atom<T>) => {
    const contents = store.get(a);
    return {
      contents,
      state: 'hasValue' as const,
      getValue: () => contents,
      valueMaybe: () => contents,
    };
  },
  // デバッグ用途 (DebugObserver)。列挙は非対応のため空配列を返す。
  getNodes_UNSTABLE: () => [] as Atom<unknown>[],
});

// ---- useRecoilCallback ----
// recoil: useRecoilCallback(({ set, snapshot }) => (...args) => {...}, deps)
export function useRecoilCallback<Args extends unknown[], Return>(
  fn: (iface: {
    set: <T>(
      a: WritableAtom<T, [T | ((prev: T) => T)], void>,
      v: T | ((prev: T) => T),
    ) => void;
    reset: (a: unknown) => void;
    snapshot: ReturnType<typeof makeSnapshot>;
  }) => (...args: Args) => Return,
  deps: React.DependencyList = [],
): (...args: Args) => Return {
  const store = useStore();
  return useCallback(
    (...args: Args) => {
      const iface = {
        set: <T,>(
          a: WritableAtom<T, [T | ((prev: T) => T)], void>,
          v: T | ((prev: T) => T),
        ) => {
          store.set(a, v);
        },
        // reset は当プロジェクト未使用。念のため no-op。
        reset: () => undefined,
        snapshot: makeSnapshot(store),
      };
      return fn(iface)(...args);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store, ...deps],
  );
}

// ---- useRecoilSnapshot (DebugObserver 用) ----
export function useRecoilSnapshot() {
  const store = useStore();
  return makeSnapshot(store);
}

// ---- RecoilRoot → jotai Provider ----
export const RecoilRoot: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => <Provider>{children}</Provider>;

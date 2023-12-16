import store from 'store2';

import { LS_PREFIX } from '../shared/globals';

type LocalStoreGetter<T> = (k: string) => T;
type LocalStoreSetter<T> = (k: string, data: T, overwrite?: boolean) => void;

export const localStore = <T>(): [LocalStoreGetter<T>, LocalStoreSetter<T>] => {
  const key = (key: string) => `${LS_PREFIX}.${key}`;

  const getter = (k: string) => store.get(key(k));
  const setter = (k: string, data: T, overwrite?: boolean) =>
    store.set(key(k), data, overwrite);

  return [getter, setter];
};

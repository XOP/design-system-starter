import { action, atom } from 'nanostores';

import {
  LS_KEY_META,
  SIDEBAR_STATE,
  EXAMPLE_STATE,
  COLOR_THEME,
} from '../shared/globals';

import { localStore } from './local';

export type MetaDataStore = Record<string, string | number | boolean>;

export type SidebarStateKeys = keyof typeof SIDEBAR_STATE;
export type SidebarStateValues = (typeof SIDEBAR_STATE)[SidebarStateKeys];

export type ExamplesStateKeys = keyof typeof EXAMPLE_STATE;
export type ExamplesStateValues = (typeof EXAMPLE_STATE)[ExamplesStateKeys];

export type ColorThemeKeys = keyof typeof COLOR_THEME;
export type ColorThemeValues = (typeof COLOR_THEME)[ColorThemeKeys];

// ------------------------------------
// Setup
// ------------------------------------

const [getLsMeta, setLsMeta] = localStore<MetaDataStore>();

// synced settings
export const sourceCode = atom<boolean>(false);
export const colorTheme = atom<ColorThemeValues>(COLOR_THEME.dark);

// local settings
export const sidebarState = atom<SidebarStateValues>(SIDEBAR_STATE.closed);
export const exampleState = atom<ExamplesStateValues>(EXAMPLE_STATE.loading);

sourceCode.listen(() => {
  setMetaStore();
});

colorTheme.listen(() => {
  setMetaStore();
});

// store update
export const updateMetaStore = function updateMetaStore(
  data: MetaDataStore
): void {
  sourceCode.set(data.sourceCode as boolean);
  colorTheme.set(data.colorTheme as ColorThemeValues);
};

// retrieve and set initial data
const localMeta = getMetaStore();

if (localMeta === null) {
  setInitialMeta();
} else {
  updateMetaStore(localMeta);
}

// ------------------------------------
// Actions
// ------------------------------------

export const showSourceCode = action(
  sourceCode,
  'showSourceCode',
  (store, value: boolean) => {
    store.set(value);
  }
);

export const changeColorTheme = action(
  colorTheme,
  'changeColorTheme',
  (store, value: ColorThemeValues) => {
    store.set(value);
  }
);

// ------------------------------------
// High Order
// ------------------------------------

export function setInitialMeta(): void {
  sourceCode.set(false);
  colorTheme.set(COLOR_THEME.dark);
}

export function setMetaStore(): void {
  setLsMeta(LS_KEY_META, {
    sourceCode: sourceCode.get(),
    colorTheme: colorTheme.get(),
  });
}

export function getMetaStore(): MetaDataStore {
  return getLsMeta(LS_KEY_META);
}

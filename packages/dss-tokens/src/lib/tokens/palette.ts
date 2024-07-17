import type { ColorTokens } from 'unicornix';

import { theme as colorTheme } from '../../../.unicornix/theme';
import { tokens as colorRefs } from '../../../.unicornix/theme.refs';

const { light, dark } = colorTheme;

export interface TokensPalette extends ColorTokens {}

export const paletteVars: TokensPalette = colorRefs;
export const paletteLight: TokensPalette = light;
export const paletteDark: TokensPalette = dark;

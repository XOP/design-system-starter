import { tokens } from '@ds-starter/tokens';

const fontSize = { ...tokens.fontSize };
type FontSize = typeof fontSize;

const processedFontSize = Object.keys(tokens.fontSize).reduce<FontSize>(
  (acc, cur) => {
    const key = cur as keyof FontSize;
    const value = tokens.fontSize[key];
    const parsedValue = parseFloat(value + '');
    let outputValue = parsedValue;

    if (/rem/.test(value as string)) {
      outputValue = Math.round(parsedValue * 16);
    }

    acc[key] = String(outputValue);

    return acc;
  },
  {} as FontSize,
);

export default {
  fontFamily: tokens.fontFamily.main,
  fontSize: processedFontSize,
  fontWeight: {
    regular: '400',
    bold: '700',
  },
};

import { tokens } from '@awsm/tokens';

const fontSize = { ...tokens.fontSize } as const;
type FontSize = typeof fontSize;

const processedFontSize = Object.keys(tokens.fontSize).reduce<FontSize>(
  (acc, cur) => {
    const value = tokens.fontSize[cur as keyof FontSize];
    const parsedValue = parseFloat(value + '');
    let outputValue = parsedValue;

    if (/rem/.test(value as string)) {
      outputValue = Math.round(parsedValue * 16);
    }

    return { ...acc, ...{ [cur]: String(outputValue) } };
  },
  {} as FontSize,
);

export default {
  fontFamily: tokens.fontFamily.main,
  fontSize: processedFontSize,
  fontWeight: {
    regular: '400',
    bold: '800',
  },
};

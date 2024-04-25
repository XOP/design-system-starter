import { tokens } from '@ds-starter/tokens';

const theme = {
  ...tokens,

  fontFamily: `${tokens.fontFamily.main}, ${tokens.fontFamily.fallback}`,
};

export { theme };

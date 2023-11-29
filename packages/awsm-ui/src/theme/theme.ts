import { tokens } from '@awsm/tokens';

const theme = {
  ...tokens,

  fontFamily: `${tokens.fontFamily.main}, ${tokens.fontFamily.fallback}`
};

export { theme }

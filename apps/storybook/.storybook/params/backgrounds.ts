import { tokensNebula, tokensPrism } from '@awsm/tokens';

export const backgrounds = {
  default: 'nebula',
  values: [
    {
      name: 'nebula',
      value: tokensNebula.color.gamma[50],
    },
    {
      name: 'prism',
      value: tokensPrism.color.gamma[50],
    },
  ],
};

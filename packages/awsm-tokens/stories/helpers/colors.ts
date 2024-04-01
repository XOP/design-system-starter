import { tokens } from '../../dist/tokens.esm.js';

export default {
  gammaOne: Object.keys(tokens.color.gamma).reduce((acc, cur) => {
    if (+cur < 500) {
      return { ...acc, ...{ [cur]: tokens.color.gamma[cur] } };
    } else return acc;
  }, {}),
  gammaTwo: Object.keys(tokens.color.gamma).reduce((acc, cur) => {
    if (+cur >= 500) {
      return { ...acc, ...{ [cur]: tokens.color.gamma[cur] } };
    } else return acc;
  }, {}),
  primary: Object.keys(tokens.color.primary).reduce((acc, cur) => {
    if (cur !== 'gamma') {
      return { ...acc, ...{ [cur]: tokens.color.primary[cur] } };
    } else return acc;
  }, {}),
  primaryGammaOne: Object.keys(tokens.color.primary.gamma).reduce(
    (acc, cur) => {
      if (+cur < 500) {
        return { ...acc, ...{ [cur]: tokens.color.primary.gamma[cur] } };
      } else return acc;
    },
    {}
  ),
  primaryGammaTwo: Object.keys(tokens.color.primary.gamma).reduce(
    (acc, cur) => {
      if (+cur >= 500) {
        return { ...acc, ...{ [cur]: tokens.color.primary.gamma[cur] } };
      } else return acc;
    },
    {}
  ),
  secondary: Object.keys(tokens.color.secondary).reduce((acc, cur) => {
    if (cur !== 'gamma') {
      return { ...acc, ...{ [cur]: tokens.color.secondary[cur] } };
    } else return acc;
  }, {}),
  secondaryGammaOne: Object.keys(tokens.color.secondary.gamma).reduce(
    (acc, cur) => {
      if (+cur < 500) {
        return { ...acc, ...{ [cur]: tokens.color.secondary.gamma[cur] } };
      } else return acc;
    },
    {}
  ),
  secondaryGammaTwo: Object.keys(tokens.color.secondary.gamma).reduce(
    (acc, cur) => {
      if (+cur >= 500) {
        return { ...acc, ...{ [cur]: tokens.color.secondary.gamma[cur] } };
      } else return acc;
    },
    {}
  ),
  safe: tokens.color.safe,
  alert: tokens.color.alert,
  warning: tokens.color.warning,
  info: tokens.color.info,
  text: tokens.color.text,
  background: tokens.color.background,
  focusRing: { focusRing: tokens.color.focusRing },
  shadow: { shadow: tokens.color.shadow },
};

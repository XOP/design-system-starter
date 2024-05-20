import { tokens } from '../../src/lib/tokens/tokens';

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
    if (cur === 'mainRgb') return;
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
    if (cur === 'mainRgb') return;
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

  safe: Object.keys(tokens.color.safe).reduce((acc, cur) => {
    if (cur === 'mainRgb') return;
    if (cur !== 'gamma') {
      return { ...acc, ...{ [cur]: tokens.color.safe[cur] } };
    } else return acc;
  }, {}),
  safeGammaOne: Object.keys(tokens.color.safe.gamma).reduce((acc, cur) => {
    if (+cur < 500) {
      return { ...acc, ...{ [cur]: tokens.color.safe.gamma[cur] } };
    } else return acc;
  }, {}),
  safeGammaTwo: Object.keys(tokens.color.safe.gamma).reduce((acc, cur) => {
    if (+cur >= 500) {
      return { ...acc, ...{ [cur]: tokens.color.safe.gamma[cur] } };
    } else return acc;
  }, {}),

  alert: Object.keys(tokens.color.alert).reduce((acc, cur) => {
    if (cur === 'mainRgb') return;
    if (cur !== 'gamma') {
      return { ...acc, ...{ [cur]: tokens.color.alert[cur] } };
    } else return acc;
  }, {}),
  alertGammaOne: Object.keys(tokens.color.alert.gamma).reduce((acc, cur) => {
    if (+cur < 500) {
      return { ...acc, ...{ [cur]: tokens.color.alert.gamma[cur] } };
    } else return acc;
  }, {}),
  alertGammaTwo: Object.keys(tokens.color.alert.gamma).reduce((acc, cur) => {
    if (+cur >= 500) {
      return { ...acc, ...{ [cur]: tokens.color.alert.gamma[cur] } };
    } else return acc;
  }, {}),

  warning: Object.keys(tokens.color.warning).reduce((acc, cur) => {
    if (cur === 'mainRgb') return;
    if (cur !== 'gamma') {
      return { ...acc, ...{ [cur]: tokens.color.warning[cur] } };
    } else return acc;
  }, {}),
  warningGammaOne: Object.keys(tokens.color.warning.gamma).reduce(
    (acc, cur) => {
      if (+cur < 500) {
        return { ...acc, ...{ [cur]: tokens.color.warning.gamma[cur] } };
      } else return acc;
    },
    {}
  ),
  warningGammaTwo: Object.keys(tokens.color.warning.gamma).reduce(
    (acc, cur) => {
      if (+cur >= 500) {
        return { ...acc, ...{ [cur]: tokens.color.warning.gamma[cur] } };
      } else return acc;
    },
    {}
  ),

  info: Object.keys(tokens.color.info).reduce((acc, cur) => {
    if (cur === 'mainRgb') return;
    if (cur !== 'gamma') {
      return { ...acc, ...{ [cur]: tokens.color.info[cur] } };
    } else return acc;
  }, {}),
  infoGammaOne: Object.keys(tokens.color.info.gamma).reduce((acc, cur) => {
    if (+cur < 500) {
      return { ...acc, ...{ [cur]: tokens.color.info.gamma[cur] } };
    } else return acc;
  }, {}),
  infoGammaTwo: Object.keys(tokens.color.info.gamma).reduce((acc, cur) => {
    if (+cur >= 500) {
      return { ...acc, ...{ [cur]: tokens.color.info.gamma[cur] } };
    } else return acc;
  }, {}),

  text: tokens.color.text,
  background: tokens.color.background,
  focusRing: { focusRing: tokens.color.focusRing },
  shadow: { shadow: tokens.color.shadow },
};

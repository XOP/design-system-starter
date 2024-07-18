import { tokens } from '../../src/lib/tokens/tokens';

export default {
  accent: Object.keys(tokens.color.accent).reduce((acc, cur) => {
    if (cur !== 'gamma' && cur !== 'alpha') {
      return { ...acc, ...{ [cur]: tokens.color.accent[cur] } };
    } else return acc;
  }, {}),
  accentGamma1: Object.keys(tokens.color.accent.gamma).reduce((acc, cur) => {
    if (+cur < 500) {
      return { ...acc, ...{ [cur]: tokens.color.accent.gamma[cur] } };
    } else return acc;
  }, {}),
  accentGamma2: Object.keys(tokens.color.accent.gamma).reduce((acc, cur) => {
    if (+cur >= 500) {
      return { ...acc, ...{ [cur]: tokens.color.accent.gamma[cur] } };
    } else return acc;
  }, {}),
  accentAlpha1: Object.keys(tokens.color.accent.alpha).reduce((acc, cur) => {
    if (+cur < 500) {
      return { ...acc, ...{ [cur]: tokens.color.accent.alpha[cur] } };
    } else return acc;
  }, {}),
  accentAlpha2: Object.keys(tokens.color.accent.alpha).reduce((acc, cur) => {
    if (+cur >= 500) {
      return { ...acc, ...{ [cur]: tokens.color.accent.alpha[cur] } };
    } else return acc;
  }, {}),

  neutral: Object.keys(tokens.color.neutral).reduce((acc, cur) => {
    if (cur !== 'gamma' && cur !== 'alpha') {
      return { ...acc, ...{ [cur]: tokens.color.neutral[cur] } };
    } else return acc;
  }, {}),
  neutralGamma1: Object.keys(tokens.color.neutral.gamma).reduce((acc, cur) => {
    if (+cur < 500) {
      return { ...acc, ...{ [cur]: tokens.color.neutral.gamma[cur] } };
    } else return acc;
  }, {}),
  neutralGamma2: Object.keys(tokens.color.neutral.gamma).reduce((acc, cur) => {
    if (+cur >= 500) {
      return { ...acc, ...{ [cur]: tokens.color.neutral.gamma[cur] } };
    } else return acc;
  }, {}),
  neutralAlpha1: Object.keys(tokens.color.neutral.alpha).reduce((acc, cur) => {
    if (+cur < 500) {
      return { ...acc, ...{ [cur]: tokens.color.neutral.alpha[cur] } };
    } else return acc;
  }, {}),
  neutralAlpha2: Object.keys(tokens.color.neutral.alpha).reduce((acc, cur) => {
    if (+cur >= 500) {
      return { ...acc, ...{ [cur]: tokens.color.neutral.alpha[cur] } };
    } else return acc;
  }, {}),

  safe: Object.keys(tokens.color.safe).reduce((acc, cur) => {
    if (cur !== 'gamma' && cur !== 'alpha') {
      return { ...acc, ...{ [cur]: tokens.color.safe[cur] } };
    } else return acc;
  }, {}),

  alert: Object.keys(tokens.color.alert).reduce((acc, cur) => {
    if (cur !== 'gamma' && cur !== 'alpha') {
      return { ...acc, ...{ [cur]: tokens.color.alert[cur] } };
    } else return acc;
  }, {}),

  warning: Object.keys(tokens.color.warning).reduce((acc, cur) => {
    if (cur !== 'gamma' && cur !== 'alpha') {
      return { ...acc, ...{ [cur]: tokens.color.warning[cur] } };
    } else return acc;
  }, {}),

  info: Object.keys(tokens.color.info).reduce((acc, cur) => {
    if (cur !== 'gamma' && cur !== 'alpha') {
      return { ...acc, ...{ [cur]: tokens.color.info[cur] } };
    } else return acc;
  }, {}),

  content: tokens.color.content,
  background: tokens.color.background,

  focus: { color: tokens.focus.color },
  shadow: { color: tokens.shadow.color },
};

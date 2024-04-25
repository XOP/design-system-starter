import { camelCaseToKebab } from './camelCaseToKebab';
import { composeCssVarName } from './composeCss';

/**
 * convertVarsToCss
 * @param varsObj object
 * @param keys string[]
 * @returns string
 */
export function convertVarsToCss(varsObj: object, ...keys: string[]) {
  let css = '';

  Object.entries(varsObj).forEach(([_, value]) => {
    let key = camelCaseToKebab(_);

    if (key === 'default') key = '';
    if (!value) return;

    if (typeof value === 'object') {
      css += convertVarsToCss(value, ...keys, key);
    } else {
      css += `  ${composeCssVarName(...keys, key)}: ${value};\n`;
    }
  });

  return css;
}

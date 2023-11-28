import { camelCaseToKebab } from './camelCaseToKebab.js';
import { composeCssVar } from './composeCss.js';

/**
 * generateVarsRefs
 * @param varsObj object
 * @param keys string[]
 * @returns object
 */
export function convertVarsToRefs(varsObj: object, ...keys: string[]) {
  let obj: { [key: string]: string | object } = {};

  Object.entries(varsObj).forEach(([_, value]) => {
    const key = camelCaseToKebab(_);

    if (!value) return;

    if (typeof value === 'object') {
      obj[_] = convertVarsToRefs(value, ...keys, key);
    } else {
      obj[_] = composeCssVar(...keys, key);
    }
  });

  return obj;
}

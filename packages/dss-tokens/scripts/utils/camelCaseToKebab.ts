/**
 * camelCaseToKebab
 * @param str string
 * @returns string
 */
export function camelCaseToKebab(str: string) {
  return str
    .replace(/([a-z])(\d)/, '$1-$2')
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase();
}

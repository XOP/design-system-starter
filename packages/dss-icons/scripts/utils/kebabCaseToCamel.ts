/**
 * kebabCaseToCamel
 * @param str string
 * @returns string
 */
export function kebabCaseToCamel(str: string) {
  return str.replace(/-\w/g, (s) => s.replace(/-/, '').toUpperCase());
}

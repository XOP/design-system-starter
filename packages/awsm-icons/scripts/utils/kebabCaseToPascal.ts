/**
 * kebabCaseToPascal
 * @param str string
 * @returns string
 */
export function kebabCaseToPascal(str: string) {
  return str.replace(/(^\w|-\w)/g, (s) => s.replace(/-/, '').toUpperCase());
}

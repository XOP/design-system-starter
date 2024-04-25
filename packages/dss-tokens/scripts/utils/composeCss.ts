/**
 * composeCssVarName
 * @param keys string[]
 * @returns string
 */
export function composeCssVarName(...keys: string[]) {
  const refinedKeys = keys.filter(Boolean).map((key) => {
    return key.replaceAll('.', '');
  });

  return `--${refinedKeys.join('-')}`;
}

/**
 * composeCssVar
 * @param keys string[]
 * @returns string
 */
export function composeCssVar(...keys: string[]) {
  return `var(${composeCssVarName(...keys)})`;
}

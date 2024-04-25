export const calc = (...args: (string | number)[]): string => {
  return `calc(${args.join(' + ')})`;
};

calc.x = (arg: string | number, amount = 1): string | number => {
  if (typeof arg === 'string') {
    if (/rem$/.test(arg)) {
      return parseFloat(arg) * amount + 'rem';
    }

    if (/px$/.test(arg)) {
      return parseFloat(arg) * amount + 'px';
    }

    return `(${amount} * ${arg})`;
  }

  return amount * arg;
};

calc.minus = (arg: string | number) => calc.x(arg, -1);

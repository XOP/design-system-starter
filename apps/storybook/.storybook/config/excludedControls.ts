const common = ['name', 'className', 'style', 'slot', 'tabIndex'];

const form = [
  'form',
  'formAction',
  'formEncType',
  'formMethod',
  'formNoValidate',
  'formTarget',
];

export const excludedControls = [...common, ...form];

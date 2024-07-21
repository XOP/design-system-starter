const template = (variables, { tpl }) => {
  return tpl`
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);

${variables.componentName}.displayName = '${variables.componentName}';

${variables.exports};
`;
};

export default template;

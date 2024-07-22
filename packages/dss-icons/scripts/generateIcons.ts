import { resolve } from 'node:path';
import { readFile, readdir, writeFile } from 'node:fs/promises';

import { transform } from '@svgr/core';

import { PREFIX, kebabCaseToCamel, kebabCaseToPascal } from './utils';

import template from './template';

const svgDir = resolve(process.cwd(), 'svg');
const outputDir = resolve(process.cwd(), 'lib/icons');
const indexPath = resolve(outputDir, 'index.ts');

(async () => {
  const iconsList: string[] = [];

  for (const fileName of await readdir(svgDir)) {
    if (!/.svg$/.test(fileName)) return;

    const iconName = fileName.split('.svg')[0];
    const camelCaseName = kebabCaseToCamel(iconName);
    const pascalCaseName = kebabCaseToPascal(iconName);
    const componentName = 'Icon' + pascalCaseName;

    iconsList.push(componentName);

    const svgCode = await readFile(resolve(svgDir, fileName), 'utf-8');

    const reactCode = await transform(
      svgCode,
      {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        template,
        icon: true,
        typescript: true,
        dimensions: true,
        jsxRuntime: 'automatic',
        svgProps: {
          'aria-hidden': 'true',
          className: `${PREFIX}-icon ${PREFIX}-icon-${camelCaseName}`,
          focusable: 'false',
        },
      },
      { componentName },
    );

    await writeFile(resolve(outputDir, `${componentName}.tsx`), reactCode);
    console.log(`${componentName} icon generated`);
  }

  const indexData = iconsList
    .map((iconName) => {
      return `export { default as ${iconName} } from './${iconName}';`;
    })
    .join('\n');

  await writeFile(indexPath, indexData);
  console.log('ℹ️ index.ts generated');

  console.log('--------------------');
  console.log('✅ all icons generated!');
})();

import path from 'node:path';
import fs from 'node:fs/promises';

import { CSS_NAMESPACE } from '../constants';

import { convertVarsToCss } from './utils';

const vars = ['content', 'sizes', 'details'];
const commonPrefix = [CSS_NAMESPACE];

const cssOutputDir = path.resolve(process.cwd(), 'src/lib/css');

(async () => {
  for (let i = 0; i < vars.length; i++) {
    const cssOutputFile = `${vars[i]}.css`;
    let cssOutput = '/* generated file, do not edit directly */\n\n';

    const content = await import(`../src/lib/tokens/entries/${vars[i]}`);
    const cssData = convertVarsToCss(content, ...commonPrefix);

    cssOutput += ':root ';
    cssOutput += `{\n${cssData}\n}\n`;

    await fs.writeFile(path.resolve(cssOutputDir, cssOutputFile), cssOutput);
    console.log(`✅ ${vars[i]} variables generated!`);
  }
})();

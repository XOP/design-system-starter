import path from 'path';
import fs from 'fs/promises';

import { PREFIX, convertVarsToCss } from './utils';

const vars = ['content', 'sizes', 'details'];
const commonPrefix = [PREFIX];

const cssOutputDir = path.resolve(process.cwd(), 'src/lib/css');
const memo = '/* generated file, do not edit directly */\n\n';

(async () => {
  for (let i = 0; i < vars.length; i++) {
    const cssOutputFile = `${vars[i]}.css`;
    let cssOutput = memo;

    const content = await import(`../src/lib/tokens/entries/${vars[i]}`);
    const cssData = convertVarsToCss(content, ...commonPrefix);

    cssOutput += `:root `;
    cssOutput += `{\n${cssData}\n}\n`;

    await fs.writeFile(path.resolve(cssOutputDir, cssOutputFile), cssOutput);
    console.log(`✅ ${vars[i]} variables generated!`);
  }
})();

import path from 'path';
import fs from 'fs/promises';

import * as palette from '../src/lib/tokens/palette';

import {
  MEMO,
  PREFIX,
  THEME_DEFAULT,
  convertVarsToCss,
  convertVarsToRefs,
} from './utils';

const category = 'color';
const commonPrefix = [PREFIX, category];

const cssOutputDir = path.resolve(process.cwd(), 'src/lib/css');
const cssOutputFile = 'palette.css';

const outputDir = path.resolve(process.cwd(), 'src/lib/tokens');
const tsOutputFile = 'palette.out.ts';
const varsOutputFile = 'palette.vars.ts';

let tsOutput = MEMO;
let cssOutput = MEMO;
let varsOutput = MEMO;
let varsData;
let paletteData: object | null = null;

// TS pre-compilation
Object.entries(palette).forEach(([moduleName, moduleData]) => {
  tsOutput += `export const ${moduleName} = ${JSON.stringify(
    moduleData,
    null,
    2
  )};\n\n`;
});

// CSS variables compilation
Object.entries(palette).forEach(([moduleName, moduleData]) => {
  let cssData = '';
  const r = moduleName.match(/([A-Z])\w+/);

  if (!r && !r?.[0]) {
    throw new Error(
      '❌ check exported palette name, it should satisfy the pattern "paletteFooBar"'
    );
  }

  cssData += convertVarsToCss(moduleData, ...commonPrefix);

  const paletteName = r![0].toLowerCase();
  const defaultThemeRx = new RegExp(THEME_DEFAULT);

  // for default palette without data-* attribute
  if (defaultThemeRx.test(paletteName)) {
    cssOutput += `:root, `;
  }

  cssOutput += `:root[data-${PREFIX}='${paletteName}'] `;
  cssOutput += `{\n${cssData}\n}\n\n`;

  // for reference building this only needs to be done once
  if (!paletteData) {
    paletteData = JSON.parse(JSON.stringify(moduleData));
  }
});

// CSS variables references compilation
if (paletteData) {
  varsData = convertVarsToRefs(paletteData, ...commonPrefix);
  varsOutput += `export const paletteVars = ${JSON.stringify(
    varsData,
    null,
    2
  )};`;
}

(async () => {
  await fs.writeFile(path.resolve(outputDir, tsOutputFile), tsOutput);
  await fs.writeFile(path.resolve(outputDir, varsOutputFile), varsOutput);
  await fs.writeFile(path.resolve(cssOutputDir, cssOutputFile), cssOutput);
  console.log('✅ palette variables generated!');
})();

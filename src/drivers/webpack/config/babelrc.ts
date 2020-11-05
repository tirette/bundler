import { dirname } from 'path';
import { local } from '@tirette/utilities/lib-cjs';
import getFiles from '../utils/getFiles';
import getExtensions from '../utils/getExtensions';
import { entry } from '../../../arguments';

/*
* Generates .babelrc based on the files in the project.
*/

const entryDirectory = dirname(local(entry));
const files = getFiles(entryDirectory);
const extensions = getExtensions(files);
let hasReact = false;
let hasTests = false;
let hasTypescript = false;

for (const extension of extensions) {
  if (/(jsx|tsx)/.test(extension)) {
    hasReact = true;
  }

  if (/(ts|tsx)/.test(extension)) {
    hasTypescript = true;
  }
}

for (const file of files) {
  if (/\.test\./.test(file)) {
    hasTests = true;
  }
}

const babelrc = {
  presets: [
    '@babel/env',
    ...(hasReact ? ['@babel/react'] : []),
    ...(hasTypescript ? ['@babel/typescript'] : [])
  ],
  plugins: [
    'styled-components',
    '@babel/transform-runtime'
  ],
  ...(hasTests && {
    env: {
      test: {
        plugins: [
          'require-context-hook'
        ]
      }
    }
  })
}

export default babelrc;

import { local, } from '@tirette/utilities/lib-cjs';
import { dirname } from 'path';
import { Configuration } from 'webpack';
import fs from 'fs';
import merge from 'webpack-merge';
import getFiles from './utils/getFiles';
import getExtensions from './utils/getExtensions';
import base from './config/base';
import handleTypescript from './config/handleTypescript';
import handleJavascript from './config/handleJavascript';
import handleCSS from './config/handleCSS';
import handleHTML from './config/handleHTML';
import handleImages from './config/handleImages';
import handleEnvironment from './config/handleEnvironment';
import handleGraphql from './config/handleGraphql';
import { entry, environment } from '../../arguments';

const entryDirectory = dirname(local(entry));
const files = getFiles(entryDirectory);
const extensions = getExtensions(files);
const configs: Configuration[] = [];
const handlers = [
  {
    regex: /ts(x?)$/,
    handler: handleTypescript,
  },
  {
    regex: /js(x?)$/,
    handler: handleJavascript,
  },
  {
    regex: /css$/,
    handler: handleCSS,
  },
  {
    regex: /html$/,
    handler: handleHTML,
  },
  {
    regex: /(png|svg|jpg|gif|pdf)$/,
    handler: handleImages,
  },
  {
    regex: /(graphql|gql)$/,
    handler: handleGraphql,
  }
];

for (const { regex, handler } of handlers) {
  if (extensions.some((ext) => regex.test(ext))) {
    configs.push(handler.common);
    configs.push(handler[environment]);
  }
}

if (fs.existsSync(local('.env'))) {
  configs.push(handleEnvironment.common);
  configs.push(handleEnvironment[environment]);
}

export default merge(merge(base.common, base[environment]), ...configs);

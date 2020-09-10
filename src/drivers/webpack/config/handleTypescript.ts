import merge from 'webpack-merge';
import handleJavascript from './handleJavascript';
import { module } from '../../../utils/files';

/*
* Common:
* Transpile TypeScript to JavaScript.
*/

const common = {
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: module('ts-loader')
          }
        ]
      },
    ]
  }
}

const production = {};
const development = {};

export default {
  common: merge(common, handleJavascript.common),
  production: merge(production, handleJavascript.production),
  development: merge(development, handleJavascript.development),
};

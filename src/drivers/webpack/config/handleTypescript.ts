import merge from 'webpack-merge';
import handleJavascript from './handleJavascript';

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
            loader: 'ts-loader'
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

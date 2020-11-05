import TerserPlugin from 'terser-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import babelrc from './babelrc';
import { module } from '@tirette/utilities/lib-cjs';

/*
* Common:
* Extract existing source maps from all JavaScript entries.
* The browser may otherwise misinterpret source-maps from third-parties.
* Compile JS using babel-loader, replaces .babelrc
*/

const common = {
  module: {
    rules: [
      {
        enforce: 'pre' as 'pre',
        test: /\.js$/,
        loader: module('source-map-loader')
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: module('babel-loader'),
          options: babelrc
        },
      }
    ]
  }
};

/*
* Production:
* Minimize and compress to gzip to greatly reduce the file size.
*/

const production = {
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$/
    })
  ]
};

const development = {};

export default {
  common,
  production,
  development,
};

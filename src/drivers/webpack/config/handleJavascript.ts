import TerserPlugin from 'terser-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

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
        loader: 'source-map-loader'
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/env',
              '@babel/react',
              '@babel/typescript'
            ],
            plugins: [
              'babel-plugin-styled-components',
              '@babel/plugin-transform-runtime'
            ],
            env: {
              test: {
                plugins: [
                  'require-context-hook'
                ]
              }
            }
          }
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

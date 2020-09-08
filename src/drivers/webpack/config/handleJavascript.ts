import TerserPlugin from 'terser-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

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
        },
      }
    ]
  }
};

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

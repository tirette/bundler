import HtmlWebpackPlugin from 'html-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import { local } from '../../../utils/files';

const common = {
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: local('src/index.html'),
      favicon: local('src/favicon.ico'),
      filename: 'index.html'
    })
  ]
};

const production = {
  plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.html$/
    })
  ]
}

const development = {};

export default {
  common,
  production,
  development
}
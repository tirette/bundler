import { flag, entry } from '../../../arguments';
import { local } from '../../../utils/files';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const common = {
  mode: flag,
  entry: local(entry),
  output: {
    filename: '[name].js',
    path: local('dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [local('src'), local('node_modules')]
  },
  plugins: [new CleanWebpackPlugin()]
};

const production = {
  devtool: 'source-map' as 'source-map',
  node: {
    fs: 'empty' as 'empty'
  },
}

const development = {
  devtool: 'inline-source-map' as 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: local('dist'),
    overlay: true,
    hot: true,
    port: 3000,
  },
};

export default {
  common,
  production,
  development,
};

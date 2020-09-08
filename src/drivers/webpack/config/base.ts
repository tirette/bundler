import { flag, entry } from '../../../arguments';
import { local } from '../../../utils/files';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { DefinePlugin } from 'webpack';
import dotenv from 'dotenv';
import Dotenv from 'dotenv-webpack';

dotenv.config();

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
  plugins: [
    new DefinePlugin({
      'process.env': {
        'PORT': JSON.stringify(process.env.PORT),
        'STRIPE_PUBLISHABLE_KEY': JSON.stringify(process.env.STRIPE_PUBLISHABLE_KEY),
        'STRIPE_SECRET_KEY': JSON.stringify(process.env.STRIPE_SECRET_KEY),
        'STATIC_DIRECTORY': JSON.stringify(process.env.STATIC_DIRECTORY),
        'GOOGLE_ANALYTICS_KEY': JSON.stringify(process.env.GOOGLE_ANALYTICS_KEY),
        'HOTJAR_KEY': JSON.stringify(process.env.HOTJAR_KEY),
        'HOTJAR_SNIPPET_VERSION': JSON.stringify(process.env.HOTJAR_SNIPPET_VERSION),
      }
    }),
  ]
}

const development = {
  devtool: 'inline-source-map' as 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: local('dist'),
    overlay: true,
    hot: true,
    port: 3000,
    proxy: {
      '/api': `http://localhost:${process.env.PORT}`,
    },
  },
  plugins: [
    new Dotenv()
  ]
};

export default {
  common,
  production,
  development,
};

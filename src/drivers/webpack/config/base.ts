import { flag, entry } from '../../../arguments';
import { local } from '../../../utils/files';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

/*
* Common:
* Resolves certain file extensions and modules to improve the readability of imports.
* Clear the dist folder before re-populating it with the new bundle.
*/

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

const production = {};

/*
* Development:
* Set up devtools to show original source files with lines only.
* This has a slow initial build time but faster rebuild time.
* Set up dev server with hot reloading.
* historyApiFallback serves index.html instead of the default 404 responses.
* When an URL doesn't match a true file, it serves index.html and internal JavaScript based routing can take over.
* Overlay shows compiler errors or warnings as a full-screen overlay in the browser.
*/

const development = {
  devtool: 'cheap-module-eval-source-map' as 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: 'dist',
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

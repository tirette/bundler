import HtmlWebpackPlugin from 'html-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import { local } from '@tirette/utilities/lib-cjs';

/*
* Common:
* Generate an index.html file with src/index.html as a template.
* This allows us to inject the new hashed CSS and JS files into the html dynamically using <%=htmlWebpackPlugin.files.js%> as the src.
* Load and use a favicon.
*/

const common = {
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: local('src/index.html'),
      favicon: local('src/favicon.ico'),
    })
  ]
};

/*
* Production:
* Greatly reduce the file size by g-zipping
*/

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
import { module } from '@tirette/utilities/lib-cjs';

const common = {};

/*
* Production:
* Load all .jpg files as progressive jpegs so they appear to load faster.
* File-loader loads files as esModules by default, causing image src to be loaded as Modules.
*/

const production = {
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          {
            loader: module('file-loader'),
            options: {
              esModule: false,
            }
          },
          {
            loader: module('image-webpack-loader'),
            options: {
              mozjpeg: {
                esModule: false,
                progressive: true,
              }
            }
          }
        ]
      }
    ]
  }
};

/*
* Development:
* Load all images.
* File-loader loads files as esModules by default, causing image src to be loaded as Modules.
*/

const development = {
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          {
            loader: module('file-loader'),
            options: {
              esModule: false,
            }
          }
        ]
      }
    ]
  }
};

export default {
  common,
  production,
  development
};

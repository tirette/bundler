const common = {};

/*
* Production:
* Load all .jpg files as progressive jpegs so they appear to load faster.
*/

const production = {
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
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
*/

const development = {
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: 'file-loader',
      }
    ]
  }
};

export default {
  common,
  production,
  development
};

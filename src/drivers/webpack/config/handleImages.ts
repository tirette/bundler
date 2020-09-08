const common = {};

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

import CompressionPlugin from 'compression-webpack-plugin';

const common = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
}

const production = {
  plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.css$/
    })
  ]
}

const development = {};

export default {
  common,
  production,
  development
};
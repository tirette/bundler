const common = {
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      }
    ]
  }
}

const production = {};
const development = {};

export default {
  common,
  production,
  development
}
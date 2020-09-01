import { bin, internal } from './utils/files';

export default {
  webpack: {
    production: `export NODE_ENV=production && ${bin('webpack')} --config ${internal('../drivers/webpack/index.js')}`,
    development: `export NODE_ENV=development && ${bin('webpack-dev-server')} --hot --config ${internal('../drivers/webpack/index.js')}`
  }
}
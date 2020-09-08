import { bin, internal } from './utils/files';

export default {
  webpack: {
    production: `export NODE_ENV=production && ${bin('webpack')} --config ${internal('../src/drivers/webpack/config.js')}`,
    development: `export NODE_ENV=development && ${bin('webpack-dev-server')} --hot --config ${internal('../src/drivers/webpack/config.js')}`
  }
}
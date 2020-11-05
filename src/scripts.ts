import { bin } from '@tirette/utilities/lib-cjs';
import internal from './utils/internal';

export default {
  webpack: {
    production: `export NODE_ENV=production && ${bin('webpack')} --config ${internal('../lib-cjs/drivers/webpack/config.js')}`,
    development: `export NODE_ENV=development && ${bin('webpack-dev-server')} --no-inline --hot --config ${internal('../lib-cjs/drivers/webpack/config.js')}`
  }
}
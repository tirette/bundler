const path = require('path');

module.exports = {
  internal: (file: string): string => path.resolve(__dirname, `../${file}`),
  local: (file: string): string => path.resolve(process.cwd(), file),
  bin: (file: string): string => `./node_modules/.bin/${file}`
}
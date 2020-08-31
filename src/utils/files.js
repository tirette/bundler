module.exports = {
  internal = (file) => path.resolve(__dirname, `../${file}`),
  local = (file) => path.resolve(process.cwd(), file),
  bin = (file) => `./node_modules/.bin/${file}`
}
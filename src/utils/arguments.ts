const Configstore = require('configstore');
const parseArgv = require('minimist');
const pkg = require('../../package.json');

const conf = new Configstore(pkg.name);
const isBundler = process.argv[1].indexOf(Object.keys(pkg.bin)[0]) >= 0;

if (isBundler) {
  const argv = parseArgv(process.argv.slice(2));
  const { _: [entry], development, production } = argv;

  conf.clear();

  conf.set({
    entry,
    flag: production ? 'production' : development ? 'development' : undefined
  });
}

module.exports = {
  entry: conf.get('entry'),
  flag: conf.get('flag')
}

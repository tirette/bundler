import Configstore from 'configstore';
import parseArgv from 'minimist';
import pkg from '../../package.json';

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

export const entry: string = conf.get('entry');
export const flag: 'production' | 'development' = conf.get('flag');

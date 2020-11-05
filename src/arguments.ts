import { command, storeArgs, readArgs } from '@tirette/cli-core';
import fs from 'fs';
import internal from './utils/internal';

const pkg = JSON.parse(fs.readFileSync(internal('../package.json')).toString());
const thisCommand = Object.keys(pkg.bin)[0];
const argsPath = internal('./args.json');

if (command === thisCommand) {
  storeArgs(argsPath);
}

const { positionals, flags } = readArgs(argsPath);

export const [entry] = positionals;
export const environment: 'production' | 'development' = flags.production
  ? 'production'
  : flags.development
    ? 'development'
    : undefined
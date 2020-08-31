#!/usr/bin/env node
import execute from './utils/execute';
import { flag } from './utils/arguments';

const run = () => {
  execute(`echo ${flag}`);
}

run();
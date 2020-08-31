#!/usr/bin/env node
export {};
const { execute } = require('./utils/execute');
const { flag } = require('./utils/arguments');

const run = () => {
  execute(`echo ${flag}`);
}

run();
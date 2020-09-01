#!/usr/bin/env node
import execute from './utils/execute';
import scripts from './scripts';
import { flag } from './arguments';

const driver = 'webpack';

execute(scripts[driver][flag]);

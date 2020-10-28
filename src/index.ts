#!/usr/bin/env node
import scripts from './scripts';
import { execute } from '@tirette/cli-core';
import { environment } from './utils/arguments';

const driver = 'webpack';

execute(scripts[driver][environment]);

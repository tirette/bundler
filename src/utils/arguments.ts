import { argument, flag } from '@tirette/cli-core';

const { production, development } = flag;

export const [entry]: string = argument;
export const environment: 'production' | 'development' = production
  ? 'production'
  : development
    ? 'development'
    : undefined
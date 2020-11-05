import fs from 'fs';
import dotenv from 'dotenv';
import Dotenv from 'dotenv-webpack';
import { DefinePlugin } from 'webpack';
import { local } from '@tirette/utilities/lib-cjs';

if (fs.existsSync(local('.env'))) {
  dotenv.config();
}

const getKeysFromEnv = (): string[] => {
  const env = fs.existsSync(local('.env'))
    ? fs.readFileSync(local('.env'), 'utf-8')
    : ''
  
  return env.split(/[\n=]/).filter((key, index) => {
    if (!(index % 2)) {
      return key;
    }
  });
}

const parseEnvironment = () => {
  const keys = getKeysFromEnv();
  const environment = {} as any;

  for (const key of keys) {
    environment[key] = JSON.stringify(process.env[key]);
  }

  return environment;
}

const common = {};

/*
* Production:
* Define an environment variable for every existing environment variable at build time.
* The production build has no access to process.env to not accidentally expose secrets.
*/

const production = {
  plugins: [
    new DefinePlugin({
      'process.env': parseEnvironment()
    })
  ]
};

/*
* Development:
* Provide access to process.env.
* Proxy the api running on a different port to /api.
*/

const development = {
  devServer: {
    proxy: {
      '/api': `http://localhost:${process.env.PORT}`,
    }
  },
  plugins: [
    new Dotenv()
  ]
};

export default {
  common,
  production,
  development
};

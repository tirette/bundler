import fs from 'fs';
import dotenv from 'dotenv';
import Dotenv from 'dotenv-webpack';
import { DefinePlugin } from 'webpack';
import { local } from '../../../utils/files';

dotenv.config();

const getKeysFromEnv = (): string[] => {
  const env = fs.readFileSync(local('.env'), 'utf-8');
  
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

const production = {
  plugins: [
    new DefinePlugin({
      'process.env': parseEnvironment()
    })
  ]
};

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

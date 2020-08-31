import path from 'path';

export const internal = (file: string): string => path.resolve(__dirname, `../${file}`);
export const local = (file: string): string => path.resolve(process.cwd(), file);
export const bin = (file: string): string => `./node_modules/.bin/${file}`;

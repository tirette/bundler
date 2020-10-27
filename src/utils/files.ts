import path from 'path';

/*
* File system utilities.
* @internal: Links to a file in this repository.
* @local: Links to a file in the repository where the command is called from.
* @bin: Links to the node_modules/.bin folder in this repository.
* @module: Links to the node_modules folder in this repository.
*/

export const internal = (file: string): string => path.resolve(__dirname, `../${file}`);
export const local = (file: string): string => path.resolve(process.cwd(), file);
export const bin = (file: string): string => local(`node_modules/.bin/${file}`);
export const module = (file: string): string => local(`node_modules/${file}`);

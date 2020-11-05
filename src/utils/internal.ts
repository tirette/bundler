import path from 'path';

const internal = (file: string) => path.resolve(__dirname, `../${file}`);

export default internal;

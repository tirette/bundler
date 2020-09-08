import fs from 'fs';
import path from 'path';

const getFiles = (directory: string): string[] => {
  let fileList: string[] = [];
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const p = path.join(directory, file);
    const stat = fs.lstatSync(p);

    if (stat.isDirectory()) {
      fileList = [...fileList, ...getFiles(p)];
    } else {
      fileList.push(p);
    }
  }

  return fileList;
}

export default getFiles;

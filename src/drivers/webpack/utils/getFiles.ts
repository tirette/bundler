import fs from 'fs/promises';
import path from 'path';

const getFiles = async (directory: string): Promise<string[]> => {
  let fileList: string[] = [];
  const files = await fs.readdir(directory);

  for (const file of files) {
    const p = path.join(directory, file);

    if ((await fs.stat(p)).isDirectory()) {
      fileList = [...fileList, ...(await getFiles(p))];
    } else {
      fileList.push(p);
    }
  }

  return fileList;
}

export default getFiles;

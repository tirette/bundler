/*
* List all unique extensions in an array of files.
*/

const getExtensions = (files: string[]): string[] => {
  const extensions = (files.map(file => file.split('.').pop()) as string[]);

  return [...new Set(extensions)]
}

export default getExtensions;
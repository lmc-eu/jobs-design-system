import fs from 'fs';
import path from 'path';
import { compile } from 'sass';

export const loadComponentStyles = (fileUrl: string) => {
  const filePath = path.resolve(fileUrl);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Can't find scss file at ${filePath} (From)`);
  }

  const scss = compile(filePath, { loadPaths: ['../design-tokens/src/scss'] }).css.toString();

  return scss;
};

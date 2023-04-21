const fs = require('fs');
const path = require('path');
const { registerComponent } = require('mjml-core');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach((file) => {
    const actualFilePath = path.join(dir, file);

    if (fs.statSync(actualFilePath).isDirectory()) {
      walkSync(actualFilePath, filelist);
    } else {
      const filePath = actualFilePath;

      if (path.extname(filePath) === '.js') {
        filelist.push(filePath);
      }
    }
  });

  return filelist;
};

const watchedComponents = walkSync('./dist/components');

watchedComponents.forEach((compPath) => {
  const fullPath = path.join(process.cwd(), compPath);
  delete require.cache[fullPath];

  const component = fs.readFileSync(fullPath, { encoding: 'utf8' });
  registerComponent(component);
});

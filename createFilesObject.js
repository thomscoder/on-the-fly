import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const walkDir = (dirPath) => {
  const files = {};
  const entries = readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dirPath, entry.name);

    if (entry.isDirectory()) {
      files[entry.name] = { directory: walkDir(fullPath) || undefined };
    } else if (entry.isFile()) {
      const contents = readFileSync(fullPath, 'utf8');
      files[entry.name] = {
        file: {
          contents,
        },
      };
    }
  }

  const output = JSON.stringify(files, null, 2);
  const fileContents = `export const files = ${output};\n`;

  writeFileSync('src/files.ts', fileContents);

  return files;
}

walkDir("src/projects");

import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3111;

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'example.html'));
});

app.listen(port, () => {
  console.log(`App is live at http://localhost:${port}`);
});

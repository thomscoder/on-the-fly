export const files = {
  "example": {
    "directory": {
      "example.html": {
        "file": {
          "contents": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n</head>\n<body>\n    Welcome to a WebContainers app! 🥳\n</body>\n</html>"
        }
      },
      "index.js": {
        "file": {
          "contents": "import express from 'express';\nimport path, { dirname } from 'path';\nimport { fileURLToPath } from 'url';\n\nconst __filename = fileURLToPath(import.meta.url);\nconst __dirname = dirname(__filename);\n\nconst app = express();\nconst port = 3111;\n\napp.get('/', (_, res) => {\n  res.sendFile(path.join(__dirname, 'example.html'));\n});\n\napp.listen(port, () => {\n  console.log(`App is live at http://localhost:${port}`);\n});\n"
        }
      },
      "package.json": {
        "file": {
          "contents": "{\n    \"name\": \"example-app\",\n    \"type\": \"module\",\n    \"dependencies\": {\n      \"express\": \"latest\",\n      \"nodemon\": \"latest\"\n    },\n    \"scripts\": {\n      \"start\": \"nodemon --watch './' index.js\"\n    }\n  }\n  "
        }
      }
    }
  },
  "example2": {
    "directory": {}
  }
};

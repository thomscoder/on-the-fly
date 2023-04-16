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
  "qwik-app": {
    "directory": {
      ".eslintignore": {
        "file": {
          "contents": "**/*.log\n**/.DS_Store\n*.\n.vscode/settings.json\n.history\n.yarn\nbazel-*\nbazel-bin\nbazel-out\nbazel-qwik\nbazel-testlogs\ndist\ndist-dev\nlib\nlib-types\netc\nexternal\nnode_modules\ntemp\ntsc-out\ntsdoc-metadata.json\ntarget\noutput\nrollup.config.js\nbuild\n.cache\n.vscode\n.rollup.cache\ndist\ntsconfig.tsbuildinfo\nvite.config.ts\n*.spec.tsx\n*.spec.ts\n.netlify\npnpm-lock.yaml\npackage-lock.json\nyarn.lock\nserver\n"
        }
      },
      ".eslintrc.cjs": {
        "file": {
          "contents": "module.exports = {\n  root: true,\n  env: {\n    browser: true,\n    es2021: true,\n    node: true,\n  },\n  extends: [\n    'eslint:recommended',\n    'plugin:@typescript-eslint/recommended',\n    'plugin:qwik/recommended',\n  ],\n  parser: '@typescript-eslint/parser',\n  parserOptions: {\n    tsconfigRootDir: __dirname,\n    project: ['./tsconfig.json'],\n    ecmaVersion: 2021,\n    sourceType: 'module',\n    ecmaFeatures: {\n      jsx: true,\n    },\n  },\n  plugins: ['@typescript-eslint'],\n  rules: {\n    '@typescript-eslint/no-explicit-any': 'off',\n    '@typescript-eslint/explicit-module-boundary-types': 'off',\n    '@typescript-eslint/no-inferrable-types': 'off',\n    '@typescript-eslint/no-non-null-assertion': 'off',\n    '@typescript-eslint/no-empty-interface': 'off',\n    '@typescript-eslint/no-namespace': 'off',\n    '@typescript-eslint/no-empty-function': 'off',\n    '@typescript-eslint/no-this-alias': 'off',\n    '@typescript-eslint/ban-types': 'off',\n    '@typescript-eslint/ban-ts-comment': 'off',\n    'prefer-spread': 'off',\n    'no-case-declarations': 'off',\n    'no-console': 'off',\n    '@typescript-eslint/no-unused-vars': ['error'],\n    '@typescript-eslint/consistent-type-imports': 'warn',\n  },\n};\n"
        }
      },
      ".gitignore": {
        "file": {
          "contents": "# Build\n/dist\n/lib\n/lib-types\n/server\n\n# Development\nnode_modules\n*.local\n\n# Cache\n.cache\n.mf\n.rollup.cache\ntsconfig.tsbuildinfo\n\n# Logs\nlogs\n*.log\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\npnpm-debug.log*\nlerna-debug.log*\n\n# Editor\n.vscode/*\n!.vscode/extensions.json\n.idea\n.DS_Store\n*.suo\n*.ntvs*\n*.njsproj\n*.sln\n*.sw?\n\n# Yarn\n.yarn/*\n!.yarn/releases\n"
        }
      },
      ".prettierignore": {
        "file": {
          "contents": "**/*.log\n**/.DS_Store\n*.\n.vscode/settings.json\n.history\n.yarn\nbazel-*\nbazel-bin\nbazel-out\nbazel-qwik\nbazel-testlogs\ndist\ndist-dev\nlib\nlib-types\netc\nexternal\nnode_modules\ntemp\ntsc-out\ntsdoc-metadata.json\ntarget\noutput\nrollup.config.js\nbuild\n.cache\n.vscode\n.rollup.cache\ndist\ntsconfig.tsbuildinfo\nvite.config.ts\n*.spec.tsx\n*.spec.ts\n.netlify\npnpm-lock.yaml\npackage-lock.json\nyarn.lock\nserver\n"
        }
      },
      ".vscode": {
        "directory": {
          "extensions.json": {
            "file": {
              "contents": "{\n  \"recommendations\": [\"dbaeumer.vscode-eslint\", \"unifiedjs.vscode-mdx\"],\n  \"unwantedRecommendations\": []\n}\n"
            }
          },
          "qwik-city.code-snippets": {
            "file": {
              "contents": "{\n  \"onRequest\": {\n    \"scope\": \"javascriptreact,typescriptreact\",\n    \"prefix\": \"qonRequest\",\n    \"description\": \"onRequest function for a route index\",\n    \"body\": [\n      \"export const onRequest: RequestHandler = (request) => {\",\n      \"  $0\",\n      \"};\"\n    ]\n  },\n  \"loader$\": {\n    \"scope\": \"javascriptreact,typescriptreact\",\n    \"prefix\": \"qloader$\",\n    \"description\": \"loader$()\",\n    \"body\": [\n\t\t\t\"export const $1 = routeLoader$(() => {\",\n\t\t\t\"  $0\",\n\t\t\t\"});\"\n    ]\n  },\n  \"action$\": {\n    \"scope\": \"javascriptreact,typescriptreact\",\n    \"prefix\": \"qaction$\",\n    \"description\": \"action$()\",\n    \"body\": [\n\t\t\t\"export const $1 = routeAction$((data) => {\",\n\t\t\t\"  $0\",\n\t\t\t\"});\"\n    ]\n  },\n  \"Full Page\": {\n    \"scope\": \"javascriptreact,typescriptreact\",\n    \"prefix\": \"qpage\",\n    \"description\": \"Simple page component\",\n    \"body\": [\n      \"import { component$ } from '@builder.io/qwik';\",\n      \"\",\n\t\t\t\"export default component$(() => {\",\n\t\t\t\"  $0\",\n\t\t\t\"});\"\n    ]\n  }\n}\n"
            }
          },
          "qwik.code-snippets": {
            "file": {
              "contents": "{\n\t\"Qwik component (simple)\": {\n\t\t\"scope\": \"javascriptreact,typescriptreact\",\n\t\t\"prefix\": \"qcomponent$\",\n\t\t\"description\": \"Simple Qwik component\",\n\t\t\"body\": [\n\t\t\t\"export const ${1:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}} = component$(() => {\",\n\t\t\t\"  return <${2:div}>$4</$2>\",\n\t\t\t\"});\"\n\t\t]\n\t},\n\t\"Qwik component (props)\": {\n\t\t\"scope\": \"typescriptreact\",\n\t\t\"prefix\": \"qcomponent$ + props\",\n\t\t\"description\": \"Qwik component w/ props\",\n\t\t\"body\": [\n\t\t\t\"export interface ${1:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}Props {\",\n\t\t\t\"  $2\",\n\t\t\t\"}\",\n\t\t\t\"\",\n\t\t\t\"export const $1 = component$<$1Props>((props) => {\",\n\t\t\t\"  const ${2:count} = useSignal(0);\",\n\t\t\t\"  return (\",\n\t\t\t\"    <${3:div} on${4:Click}$={(ev) => {$5}}>\",\n\t\t\t\"      $6\",\n\t\t\t\"    </${3}>\",\n\t\t\t\"  );\",\n\t\t\t\"});\"\n\t\t]\n\t},\n\t\"Qwik signal\": {\n\t\t\"scope\": \"javascriptreact,typescriptreact\",\n\t\t\"prefix\": \"quseSignal\",\n\t\t\"description\": \"useSignal() declaration\",\n\t\t\"body\": [\n\t\t\t\"const ${1:foo} = useSignal($2);\",\n\t\t\t\"$0\"\n\t\t]\n\t},\n\t\"Qwik store\": {\n\t\t\"scope\": \"javascriptreact,typescriptreact\",\n\t\t\"prefix\": \"quseStore\",\n\t\t\"description\": \"useStore() declaration\",\n\t\t\"body\": [\n\t\t\t\"const ${1:state} = useStore({\",\n\t\t\t\"  $2\",\n\t\t\t\"});\",\n\t\t\t\"$0\"\n\t\t]\n\t},\n\t\"$ hook\": {\n\t\t\"scope\": \"javascriptreact,typescriptreact\",\n\t\t\"prefix\": \"q$\",\n\t\t\"description\": \"$() function hook\",\n\t\t\"body\": [\n\t\t\t\"$(() => {\",\n\t\t\t\"  $0\",\n\t\t\t\"});\",\n\t\t\t\"\"\n\t\t]\n\t},\n\t\"useVisibleTask\": {\n\t\t\"scope\": \"javascriptreact,typescriptreact\",\n\t\t\"prefix\": \"quseVisibleTask\",\n\t\t\"description\": \"useVisibleTask$() function hook\",\n\t\t\"body\": [\n\t\t\t\"useVisibleTask$(({ track }) => {\",\n\t\t\t\"  $0\",\n\t\t\t\"});\",\n\t\t\t\"\"\n\t\t]\n\t},\n\t\"useTask\": {\n\t\t\"scope\": \"javascriptreact,typescriptreact\",\n\t\t\"prefix\": \"quseTask$\",\n\t\t\"description\": \"useTask$() function hook\",\n\t\t\"body\": [\n\t\t\t\"useTask$(({ track }) => {\",\n\t\t\t\"  track(() => $1);\",\n\t\t\t\"  $0\",\n\t\t\t\"});\",\n\t\t\t\"\"\n\t\t]\n\t},\n\t\"useResource\": {\n\t\t\"scope\": \"javascriptreact,typescriptreact\",\n\t\t\"prefix\": \"quseResource$\",\n\t\t\"description\": \"useResource$() declaration\",\n\t\t\"body\": [\n\t\t\t\"const $1 = useResource$(({ track, cleanup }) => {\",\n\t\t\t\"  $0\",\n\t\t\t\"});\",\n\t\t\t\"\"\n\t\t]\n\t}\n}"
            }
          }
        }
      },
      "README.md": {
        "file": {
          "contents": "# Qwik City App ⚡️\n\n- [Qwik Docs](https://qwik.builder.io/)\n- [Discord](https://qwik.builder.io/chat)\n- [Qwik GitHub](https://github.com/BuilderIO/qwik)\n- [@QwikDev](https://twitter.com/QwikDev)\n- [Vite](https://vitejs.dev/)\n\n---\n\n## Project Structure\n\nThis project is using Qwik with [QwikCity](https://qwik.builder.io/qwikcity/overview/). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.\n\nInside your project, you'll see the following directory structure:\n\n```\n├── public/\n│   └── ...\n└── src/\n    ├── components/\n    │   └── ...\n    └── routes/\n        └── ...\n```\n\n- `src/routes`: Provides the directory based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.builder.io/qwikcity/routing/overview/) for more info.\n\n- `src/components`: Recommended directory for components.\n\n- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.\n\n## Add Integrations and deployment\n\nUse the `pnpm qwik add` command to add additional integrations. Some examples of integrations include: Cloudflare, Netlify or Express server, and the [Static Site Generator (SSG)](https://qwik.builder.io/qwikcity/guides/static-site-generation/).\n\n```shell\npnpm qwik add # or `yarn qwik add`\n```\n\n## Development\n\nDevelopment mode uses [Vite's development server](https://vitejs.dev/). During development, the `dev` command will server-side render (SSR) the output.\n\n```shell\nnpm start # or `yarn start`\n```\n\n> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.\n\n## Preview\n\nThe preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to locally preview a production build, and it should not be used as a production server.\n\n```shell\npnpm preview # or `yarn preview`\n```\n\n## Production\n\nThe production build will generate client and server modules by running both client and server build commands. Additionally, the build command will use Typescript to run a type check on the source code.\n\n```shell\npnpm build # or `yarn build`\n```\n"
        }
      },
      "package.json": {
        "file": {
          "contents": "{\n  \"name\": \"my-qwik-basic-starter\",\n  \"description\": \"App with Routing built-in (recommended)\",\n  \"engines\": {\n    \"node\": \">=15.0.0\"\n  },\n  \"private\": true,\n  \"scripts\": {\n    \"build\": \"qwik build\",\n    \"build.client\": \"vite build\",\n    \"build.preview\": \"vite build --ssr src/entry.preview.tsx\",\n    \"build.types\": \"tsc --incremental --noEmit\",\n    \"deploy\": \"echo 'Run \\\"npm run qwik add\\\" to install a server adapter'\",\n    \"dev\": \"vite --mode ssr\",\n    \"dev.debug\": \"node --inspect-brk ./node_modules/vite/bin/vite.js --mode ssr --force\",\n    \"fmt\": \"prettier --write .\",\n    \"fmt.check\": \"prettier --check .\",\n    \"lint\": \"eslint \\\"src/**/*.ts*\\\"\",\n    \"preview\": \"qwik build preview && vite preview --open\",\n    \"start\": \"vite --open --mode ssr\",\n    \"qwik\": \"qwik\"\n  },\n  \"devDependencies\": {\n    \"@builder.io/qwik\": \"0.102.0\",\n    \"@builder.io/qwik-city\": \"~0.102.0\",\n    \"@types/eslint\": \"8.37.0\",\n    \"@types/node\": \"^18.15.9\",\n    \"@typescript-eslint/eslint-plugin\": \"5.57.1\",\n    \"@typescript-eslint/parser\": \"5.57.1\",\n    \"eslint\": \"8.37.0\",\n    \"eslint-plugin-qwik\": \"0.102.0\",\n    \"prettier\": \"2.8.7\",\n    \"typescript\": \"5.0.3\",\n    \"undici\": \"5.21.0\",\n    \"vite\": \"4.3.0-beta.3\",\n    \"vite-tsconfig-paths\": \"3.5.0\"\n  }\n}\n"
        }
      },
      "public": {
        "directory": {
          "favicon.svg": {
            "file": {
              "contents": "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 500 500\"><g clip-path=\"url(#a)\"><circle cx=\"250\" cy=\"250\" r=\"250\" fill=\"#fff\"/><path fill=\"#18B6F6\" d=\"m367.87 418.45-61.17-61.18-.94.13v-.67L175.7 227.53l32.05-31.13L188.9 87.73 99.56 199.09c-15.22 15.42-18.03 40.51-7.08 59.03l55.83 93.11a46.82 46.82 0 0 0 40.73 22.81l27.65-.27 151.18 44.68Z\"/><path fill=\"#AC7EF4\" d=\"m401.25 196.94-12.29-22.81-6.41-11.67-2.54-4.56-.26.26-33.66-58.63a47.07 47.07 0 0 0-41.27-23.75l-29.51.8-88.01.28a47.07 47.07 0 0 0-40.33 23.34L93.4 207l95.76-119.54L314.7 226.19l-22.3 22.67 13.35 108.54.13-.26v.26h-.26l.26.27 10.42 10.2 50.62 49.78c2.13 2 5.6-.4 4.13-2.96l-31.25-61.85 54.5-101.3 1.73-2c.67-.81 1.33-1.62 1.87-2.42a46.8 46.8 0 0 0 3.34-50.18Z\"/><path fill=\"#fff\" d=\"M315.1 225.65 189.18 87.6l17.9 108.14L175 227l130.5 130.27-11.75-108.14 21.37-23.48Z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h500v500H0z\"/></clipPath></defs></svg>"
            }
          },
          "manifest.json": {
            "file": {
              "contents": "{\n  \"$schema\": \"https://json.schemastore.org/web-manifest-combined.json\",\n  \"name\": \"qwik-project-name\",\n  \"short_name\": \"Welcome to Qwik\",\n  \"start_url\": \".\",\n  \"display\": \"standalone\",\n  \"background_color\": \"#fff\",\n  \"description\": \"A Qwik project app.\"\n}\n"
            }
          },
          "robots.txt": {
            "file": {
              "contents": ""
            }
          }
        }
      },
      "src": {
        "directory": {
          "components": {
            "directory": {
              "router-head": {
                "directory": {
                  "router-head.tsx": {
                    "file": {
                      "contents": "import { component$ } from '@builder.io/qwik';\nimport { useDocumentHead, useLocation } from '@builder.io/qwik-city';\n\n/**\n * The RouterHead component is placed inside of the document `<head>` element.\n */\nexport const RouterHead = component$(() => {\n  const head = useDocumentHead();\n  const loc = useLocation();\n\n  return (\n    <>\n      <title>{head.title}</title>\n\n      <link rel=\"canonical\" href={loc.url.href} />\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n      <link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicon.svg\" />\n\n      {head.meta.map((m) => (\n        <meta key={m.key} {...m} />\n      ))}\n\n      {head.links.map((l) => (\n        <link key={l.key} {...l} />\n      ))}\n\n      {head.styles.map((s) => (\n        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />\n      ))}\n    </>\n  );\n});\n"
                    }
                  }
                }
              },
              "starter": {
                "directory": {
                  "counter": {
                    "directory": {
                      "counter.css": {
                        "file": {
                          "contents": ".counter-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n}\n\n.counter-value {\n  background: white;\n  border-radius: 12px;\n  color: var(--qwik-light-purple);\n  font-weight: 400;\n  font-size: 2rem;\n  width: 120px;\n}\n\n.counter-value.odd {\n  color: var(--qwik-light-blue);\n}\n"
                        }
                      },
                      "counter.tsx": {
                        "file": {
                          "contents": "import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';\nimport styles from './counter.css?inline';\n\nexport default component$(() => {\n  useStylesScoped$(styles);\n  const count = useSignal(10);\n\n  return (\n    <div class=\"counter-wrapper\">\n      <button onClick$={() => count.value--}>-</button>\n      <span class={`counter-value ${count.value % 2 === 0 ? 'odd' : ''}`}>{count.value}</span>\n      <button onClick$={() => count.value++}>+</button>\n    </div>\n  );\n});\n"
                        }
                      }
                    }
                  },
                  "footer": {
                    "directory": {
                      "footer.module.css": {
                        "file": {
                          "contents": ".anchor {\n  color: white !important;\n  display: block;\n  font-size: 0.8rem;\n  text-align: center;\n  text-decoration: none;\n}\n\n.spacer {\n  padding: 0 15px;\n}\n"
                        }
                      },
                      "footer.tsx": {
                        "file": {
                          "contents": "import { component$ } from '@builder.io/qwik';\nimport { useServerTimeLoader } from '~/routes/layout';\nimport styles from './footer.module.css';\n\nexport default component$(() => {\n  const serverTime = useServerTimeLoader();\n\n  return (\n    <footer>\n      <a href=\"https://www.builder.io/\" target=\"_blank\" class={styles.anchor}>\n        Made with ♡ by Builder.io\n        <span class={styles.spacer}>|</span>\n        <span>{serverTime.value.date}</span>\n      </a>\n    </footer>\n  );\n});\n"
                        }
                      }
                    }
                  },
                  "header": {
                    "directory": {
                      "header.module.css": {
                        "file": {
                          "contents": ".header {\n  display: flex;\n  align-items: center;\n  padding: 20px 10px 0;\n}\n\n.header .logo a {\n  display: inline-block;\n}\n\n.header ul {\n  margin: 0;\n  list-style: none;\n  flex: 1;\n  text-align: right;\n}\n\n.header li {\n  display: none;\n  margin: 0;\n  padding: 0;\n}\n\n.header li a {\n  color: white;\n  display: inline-block;\n  padding: 0 1em;\n  text-decoration: none;\n}\n\n.header li a:hover {\n  color: var(--qwik-dark-purple);\n}\n\n@media (min-width: 450px) {\n  .header li {\n    display: inline-block;\n  }\n}\n\n@media (min-width: 768px) {\n  .header {\n    padding: 20px 70px 0;\n  }\n}\n"
                        }
                      },
                      "header.tsx": {
                        "file": {
                          "contents": "import { component$ } from '@builder.io/qwik';\nimport { QwikLogo } from '../icons/qwik';\nimport styles from './header.module.css';\n\nexport default component$(() => {\n  return (\n    <header class={styles.header}>\n      <div class={styles.logo}>\n        <a href=\"/\" title=\"qwik\">\n          <QwikLogo />\n        </a>\n      </div>\n      <ul>\n        <li>\n          <a href=\"https://qwik.builder.io/docs/components/overview/\" target=\"_blank\">\n            Docs\n          </a>\n        </li>\n        <li>\n          <a href=\"https://qwik.builder.io/examples/introduction/hello-world/\" target=\"_blank\">\n            Examples\n          </a>\n        </li>\n        <li>\n          <a href=\"https://qwik.builder.io/tutorial/welcome/overview/\" target=\"_blank\">\n            Tutorials\n          </a>\n        </li>\n      </ul>\n    </header>\n  );\n});\n"
                        }
                      }
                    }
                  },
                  "hero": {
                    "directory": {
                      "hero.module.css": {
                        "file": {
                          "contents": ".hero {\n  color: white;\n  display: flex;\n  vertical-align: middle;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: center;\n  height: 200px;\n  justify-content: center;\n  gap: 30px;\n}\n\n.hero button {\n  padding: 10px 40px;\n}\n\n@media screen (min-width: 768px) {\n  .hero {\n    height: 300px;\n  }\n}\n"
                        }
                      },
                      "hero.tsx": {
                        "file": {
                          "contents": "import { component$ } from '@builder.io/qwik';\nimport styles from './hero.module.css';\n\nexport default component$(() => {\n  return (\n    <div class={styles.hero}>\n      <h1>Welcome to qwik</h1>\n      <button\n        onClick$={async () => {\n          const defaults = {\n            spread: 360,\n            ticks: 70,\n            gravity: 0,\n            decay: 0.95,\n            startVelocity: 30,\n            colors: ['006ce9', 'ac7ff4', '18b6f6', '713fc2', 'ffffff'],\n            origin: {\n              x: 0.5,\n              y: 0.245,\n            },\n          };\n\n          function loadConfetti() {\n            return new Promise<(opts: any) => void>((resolve, reject) => {\n              if ((globalThis as any).confetti) {\n                return resolve((globalThis as any).confetti as any);\n              }\n              const script = document.createElement('script');\n              script.src =\n                'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';\n              script.onload = () => resolve((globalThis as any).confetti as any);\n              script.onerror = reject;\n              document.head.appendChild(script);\n              script.remove();\n            });\n          }\n\n          const confetti = await loadConfetti();\n\n          function shoot() {\n            confetti({\n              ...defaults,\n              particleCount: 80,\n              scalar: 1.2,\n            });\n\n            confetti({\n              ...defaults,\n              particleCount: 60,\n              scalar: 0.75,\n            });\n          }\n\n          setTimeout(shoot, 0);\n          setTimeout(shoot, 100);\n          setTimeout(shoot, 200);\n          setTimeout(shoot, 300);\n          setTimeout(shoot, 400);\n        }}\n      >\n        Time to celebrate 🎉\n      </button>\n    </div>\n  );\n});\n"
                        }
                      }
                    }
                  },
                  "icons": {
                    "directory": {
                      "qwik.tsx": {
                        "file": {
                          "contents": "export const QwikLogo = () => (\n  <svg width=\"100\" height=\"35\" viewBox=\"0 0 167 53\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path\n      d=\"M81.9545 46.5859H75.5513V35.4045C73.4363 36.8579 71.0496 37.5749 68.4884 37.5749C65.0151 37.5749 62.4344 36.6253 60.8239 34.6487C59.2134 32.6915 58.3984 29.2034 58.3984 24.2231C58.3984 19.1266 59.3492 15.5997 61.2702 13.5456C63.23 11.4721 66.3734 10.4644 70.7004 10.4644C74.7946 10.4644 78.5201 11.0264 81.9545 12.131V46.5859ZM75.5513 16.278C74.096 15.8323 72.4661 15.6191 70.7004 15.6191C68.5272 15.6191 66.9749 16.1811 66.1017 17.3244C65.2479 18.4871 64.7823 20.6962 64.7823 23.9712C64.7823 27.0524 65.1897 29.1065 66.0435 30.2304C66.8973 31.335 68.3719 31.897 70.5452 31.897C73.3781 31.897 75.5513 30.7343 75.5513 29.2809V16.278Z\"\n      fill=\"white\"\n    />\n    <path\n      d=\"M91.133 11.1426C93.4033 17.4406 95.3242 23.7386 96.993 30.0948C99.205 23.5836 101.087 17.2856 102.542 11.1426H108.15C110.265 17.4406 112.031 23.7386 113.447 30.0948C115.97 23.196 117.949 16.8787 119.404 11.1426H125.71C123.033 20.173 120.064 28.777 116.785 36.8966H109.256C108.402 32.3039 107.044 26.7617 105.22 20.1536C104.056 25.2889 102.445 30.8893 100.33 36.8966H92.8018C90.2793 27.5174 87.5434 18.9522 84.6328 11.1426H91.133Z\"\n      fill=\"white\"\n    />\n    <path\n      d=\"M132.832 7.55758C129.999 7.55758 129.203 6.85996 129.203 3.97257C129.203 1.39523 130.018 0.794495 132.832 0.794495C135.665 0.794495 136.46 1.39523 136.46 3.97257C136.46 6.85996 135.665 7.55758 132.832 7.55758ZM129.649 11.1426H136.053V36.8966H129.649V11.1426Z\"\n      fill=\"white\"\n    />\n    <path\n      d=\"M166.303 11.1426C161.763 17.5956 158.581 21.5295 156.815 22.9441C158.27 23.8937 162.17 28.8933 167.002 36.916H159.628C153.613 27.7887 150.742 23.8549 149.325 23.2542V36.916H142.922V0H149.325V23.2348C150.78 22.169 153.963 18.1382 158.872 11.1426H166.303Z\"\n      fill=\"white\"\n    />\n    <path\n      d=\"M40.973 52.5351L32.0861 43.6985L31.9503 43.7179V43.621L13.0511 24.9595L17.708 20.4637L14.9721 4.76715L1.99103 20.8513C-0.220992 23.0798 -0.628467 26.7036 0.962635 29.3778L9.07337 42.8265C10.3152 44.9 12.566 46.1402 14.9915 46.1208L19.0081 46.082L40.973 52.5351Z\"\n      fill=\"#18B6F6\"\n    />\n    <path\n      d=\"M45.8232 20.5411L44.038 17.2468L43.1066 15.5609L42.738 14.902L42.6992 14.9408L37.8094 6.47238C36.587 4.34075 34.2974 3.02301 31.8137 3.04239L27.5255 3.15865L14.7384 3.19741C12.313 3.21679 10.101 4.49577 8.87853 6.56927L1.09766 21.9945L15.0101 4.72831L33.2496 24.7656L30.0091 28.0406L31.9495 43.7178L31.9689 43.679V43.7178H31.9301L31.9689 43.7565L33.4824 45.2293L40.8364 52.4187C41.1469 52.7094 41.6514 52.3606 41.4379 51.9924L36.8975 43.0589L44.8142 28.4282L45.0664 28.1375C45.1634 28.0212 45.2604 27.905 45.3381 27.7887C46.8904 25.6764 47.1038 22.8472 45.8232 20.5411Z\"\n      fill=\"#AC7EF4\"\n    />\n    <path\n      d=\"M33.3076 24.6882L15.0099 4.74774L17.61 20.3668L12.9531 24.882L31.9105 43.6985L30.203 28.0794L33.3076 24.6882Z\"\n      fill=\"white\"\n    />\n  </svg>\n);\n"
                        }
                      }
                    }
                  },
                  "infobox": {
                    "directory": {
                      "infobox.module.css": {
                        "file": {
                          "contents": ".infobox {\n  font-size: 0.8rem;\n  line-height: 2;\n  margin: 0 0 40px;\n}\n\n.infobox h3 {\n  color: #333;\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 0 0 15px;\n  padding: 0;\n}\n\n@media screen and (min-width: 600px) {\n  .infobox {\n    margin: 0;\n  }\n}\n"
                        }
                      },
                      "infobox.tsx": {
                        "file": {
                          "contents": "import { Slot, component$ } from '@builder.io/qwik';\nimport styles from './infobox.module.css';\n\nexport default component$(() => {\n  return (\n    <div class={styles.infobox}>\n      <h3>\n        <Slot name=\"title\" />\n      </h3>\n      <Slot />\n    </div>\n  );\n});\n"
                        }
                      }
                    }
                  },
                  "next-steps": {
                    "directory": {
                      "next-steps.module.css": {
                        "file": {
                          "contents": ".gettingstarted {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 160px;\n  line-height: 1.5;\n}\n\n.gettingstarted .hint {\n  margin-top: 10px;\n  font-size: 0.8rem;\n}\n\n@media screen and (min-width: 768px) {\n  .gettingstarted {\n    height: 120px;\n  }\n}\n"
                        }
                      },
                      "next-steps.tsx": {
                        "file": {
                          "contents": "import { component$, $, useOnWindow, useSignal } from '@builder.io/qwik';\nimport styles from './next-steps.module.css';\n\nexport const GETTING_STARTED_STEPS = [\n  {\n    message: '<b>Ready</b> to make some changes?<br />Press and hold the <b>ALT</b> key',\n  },\n  {\n    message: 'Select the title of this page while keeping the <b>ALT</b> key pressed',\n    hint: 'Edit the title and save the changes. If your editor does not open, have a look at <a href=\"https://github.com/yyx990803/launch-editor#supported-editors\" target=\"_blank\">this page</a> to set the correct <code>LAUNCH_EDITOR</code> value.',\n  },\n  {\n    message:\n      '<b>Update</b> now the <code>routeLoader$</code> defined in the <code>src/routes/layout.tsx</code> file',\n    hint: 'Instead of returning the current date, you could return any possible string.<br />The output is displayed in the footer.',\n  },\n  {\n    message: 'Create a <b>new Route</b> called <code>/me</code>',\n    hint: 'Create a new directory called <code>me</code> in <code>src/routes</code>. Within this directory create a <code>index.tsx</code> file or copy the <code>src/routes/index.tsx</code> file. Your new route is now accessible <a href=\"/me\" target=\"_blank\">here</a> ✨',\n  },\n  {\n    message: 'Time to have a look at <b>Forms</b>',\n    hint: 'Open <a href=\"/demo/todolist\" target=\"_blank\">the TODO list App</a> and add some items to the list. Try the same with disabled JavaScript 🐰',\n  },\n  {\n    message: '<b>Congratulations!</b> You are now familiar with the basics! 🎉',\n    hint: \"If you need further info on how to use qwik, have a look at <a href='https://qwik.builder.io' target='_blank'>qwik.builder.io</a> or join the <a href='https://qwik.builder.io/chat' target='_blank'>Discord channel</a>.\",\n  },\n];\n\nexport default component$(() => {\n  const gettingStartedStep = useSignal(0);\n\n  useOnWindow(\n    'keydown',\n    $((e) => {\n      if ((e as KeyboardEvent).key === 'Alt') {\n        gettingStartedStep.value = 1;\n      }\n    })\n  );\n\n  return (\n    <>\n      <div class={styles.gettingstarted}>\n        <div dangerouslySetInnerHTML={GETTING_STARTED_STEPS[gettingStartedStep.value].message} />\n        <span\n          class={styles.hint}\n          dangerouslySetInnerHTML={GETTING_STARTED_STEPS[gettingStartedStep.value].hint}\n        />\n      </div>\n      {gettingStartedStep.value + 1 < GETTING_STARTED_STEPS.length ? (\n        <button class=\"gray small\" onClick$={() => gettingStartedStep.value++}>\n          Continue with Step {gettingStartedStep.value + 2} of {GETTING_STARTED_STEPS.length}\n        </button>\n      ) : (\n        <button class=\"gray small\" onClick$={() => (gettingStartedStep.value = 0)}>\n          Re-Start\n        </button>\n      )}\n    </>\n  );\n});\n"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "entry.dev.tsx": {
            "file": {
              "contents": "/*\n * WHAT IS THIS FILE?\n *\n * Development entry point using only client-side modules:\n * - Do not use this mode in production!\n * - No SSR\n * - No portion of the application is pre-rendered on the server.\n * - All of the application is running eagerly in the browser.\n * - More code is transferred to the browser than in SSR mode.\n * - Optimizer/Serialization/Deserialization code is not exercised!\n */\nimport { render, type RenderOptions } from '@builder.io/qwik';\nimport Root from './root';\n\nexport default function (opts: RenderOptions) {\n  return render(document, <Root />, opts);\n}\n"
            }
          },
          "entry.preview.tsx": {
            "file": {
              "contents": "/*\n * WHAT IS THIS FILE?\n *\n * It's the bundle entry point for `npm run preview`.\n * That is, serving your app built in production mode.\n *\n * Feel free to modify this file, but don't remove it!\n *\n * Learn more about Vite's preview command:\n * - https://vitejs.dev/config/preview-options.html#preview-options\n *\n */\nimport { createQwikCity } from '@builder.io/qwik-city/middleware/node';\nimport qwikCityPlan from '@qwik-city-plan';\nimport render from './entry.ssr';\n\n/**\n * The default export is the QwikCity adapter used by Vite preview.\n */\nexport default createQwikCity({ render, qwikCityPlan });\n"
            }
          },
          "entry.ssr.tsx": {
            "file": {
              "contents": "/**\n * WHAT IS THIS FILE?\n *\n * SSR entry point, in all cases the application is render outside the browser, this\n * entry point will be the common one.\n *\n * - Server (express, cloudflare...)\n * - npm run start\n * - npm run preview\n * - npm run build\n *\n */\nimport { renderToStream, type RenderToStreamOptions } from '@builder.io/qwik/server';\nimport { manifest } from '@qwik-client-manifest';\nimport Root from './root';\n\nexport default function (opts: RenderToStreamOptions) {\n  return renderToStream(<Root />, {\n    manifest,\n    ...opts,\n    // Use container attributes to set attributes on the html tag.\n    containerAttributes: {\n      lang: 'en-us',\n      ...opts.containerAttributes,\n    },\n  });\n}\n"
            }
          },
          "global.css": {
            "file": {
              "contents": "/**\n * WHAT IS THIS FILE?\n *\n * Globally applied styles. No matter which components are in the page or matching route,\n * the styles in here will be applied to the Document, without any sort of CSS scoping.\n *\n */\n\n:root {\n  --qwik-dark-blue: #006ce9;\n  --qwik-light-blue: #18b6f6;\n  --qwik-light-purple: #ac7ff4;\n  --qwik-dark-purple: #713fc2;\n}\n\nbody {\n  background: linear-gradient(90deg, rgba(24, 182, 246, 0.3) 0%, rgba(172, 127, 244, 0.3) 100%);\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;\n  font-weight: 200;\n  padding: 10px 0px;\n}\n\n::selection {\n  background: rgb(8, 2, 61);\n  color: white;\n}\n\nh1,\nh2,\nh3 {\n  font-weight: 100;\n}\n\nh1 b,\nh2 b,\nh3 b {\n  font-weight: 300;\n}\n\nh1 {\n  color: white;\n  font-size: 2rem;\n  padding: 0;\n  margin: 0;\n}\n\nh1.hero {\n  margin: 60px 0;\n}\n\nh2 {\n  color: var(--qwik-dark-purple);\n}\n\ninput[type='text'],\nbutton {\n  background-color: transparent;\n  color: white;\n  border: 1px solid white;\n  border-radius: 12px;\n  font-size: 1rem;\n  padding: 10px 20px;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: white;\n  color: var(--qwik-dark-purple);\n}\n\nbutton.small {\n  border-radius: 6px;\n  font-size: 0.8rem;\n  padding: 5px 10px;\n}\n\nbutton.gray {\n  border-color: #aaa;\n  color: #aaa;\n}\n\na,\na:active,\na:visited,\na:hover {\n  color: black;\n  font-weight: 400;\n  text-decoration: none;\n}\n\n.section.bright {\n  background: white;\n}\n\n.section.dark {\n  background: rgba(50, 50, 50, 0.5);\n}\n\ncode {\n  background: rgba(230, 230, 230, 0.3);\n  border-radius: 4px;\n  padding: 2px 6px;\n}\n\nul {\n  margin: 0;\n  padding-left: 20px;\n}\n\n.page {\n  width: 90vw;\n  max-width: 1200px;\n  margin: 0 auto;\n  background: linear-gradient(90deg, rgba(24, 182, 246, 0.6) 0%, rgba(172, 127, 244, 0.6) 100%);\n  overflow: hidden;\n  border-radius: 6px;\n}\n\n.container {\n  padding: 20px 10px;\n}\n\n.container.center {\n  text-align: center;\n}\n\n.container.mh-300 {\n  min-height: 300px;\n}\n\n.topics {\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\n/* used icon pack: https://www.svgrepo.com/collection/phosphor-thin-icons */\n.icon:before {\n  width: 18px;\n  height: 18px;\n  content: '';\n  display: inline-block;\n  margin-right: 5px;\n  position: relative;\n  top: 2px;\n}\n\n.icon-cli:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='%23000000' width='20px' height='20px' viewBox='0 0 256 256' id='Flat' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M122.499 124.87646a4.00053 4.00053 0 0 1 0 6.24708l-40 32a4.0002 4.0002 0 0 1-4.998-6.24708L113.59668 128 77.501 99.12354a4.0002 4.0002 0 0 1 4.998-6.24708ZM175.99414 156h-40a4 4 0 0 0 0 8h40a4 4 0 1 0 0-8ZM228 56.48535v143.0293A12.49909 12.49909 0 0 1 215.51465 212H40.48535A12.49909 12.49909 0 0 1 28 199.51465V56.48535A12.49909 12.49909 0 0 1 40.48535 44h175.0293A12.49909 12.49909 0 0 1 228 56.48535Zm-8 0A4.49023 4.49023 0 0 0 215.51465 52H40.48535A4.49023 4.49023 0 0 0 36 56.48535v143.0293A4.49023 4.49023 0 0 0 40.48535 204h175.0293A4.49023 4.49023 0 0 0 220 199.51465Z'/%3E%3C/svg%3E\");\n}\n\n.icon-apps:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='%23000000' width='20px' height='20px' viewBox='0 0 256 256' id='Flat' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M216 44.00586H40a12.01375 12.01375 0 0 0-12 12v144a12.01375 12.01375 0 0 0 12 12H216a12.01375 12.01375 0 0 0 12-12v-144A12.01375 12.01375 0 0 0 216 44.00586Zm4 156a4.00458 4.00458 0 0 1-4 4H40a4.00458 4.00458 0 0 1-4-4v-144a4.00458 4.00458 0 0 1 4-4H216a4.00458 4.00458 0 0 1 4 4Zm-144-116a8 8 0 1 1-8-8A7.99977 7.99977 0 0 1 76 84.00586Zm40 0a8 8 0 1 1-8-8A7.99977 7.99977 0 0 1 116 84.00586Z'/%3E%3C/svg%3E\");\n}\n\n.icon-community:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='%23000000' width='20px' height='20px' viewBox='0 0 256 256' id='Flat' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M246.40381 143.19434a4.00061 4.00061 0 0 1-5.60108-.7959A55.57857 55.57857 0 0 0 196 120a4 4 0 0 1 0-8 28 28 0 1 0-27.50732-33.26074 4.00013 4.00013 0 0 1-7.85987-1.49219 36.00191 36.00191 0 1 1 54.06494 37.50513 63.58068 63.58068 0 0 1 32.50147 22.84155A3.99993 3.99993 0 0 1 246.40381 143.19434Zm-57.24268 71.05273a3.9998 3.9998 0 1 1-7.1914 3.50391 60.02582 60.02582 0 0 0-107.93946 0 3.9998 3.9998 0 1 1-7.1914-3.50391 67.56008 67.56008 0 0 1 40.90625-35.20581 44 44 0 1 1 40.50976 0A67.56139 67.56139 0 0 1 189.16113 214.24707ZM128 176a36 36 0 1 0-36-36A36.04061 36.04061 0 0 0 128 176ZM60 112A28 28 0 1 1 87.50732 78.73828a3.99989 3.99989 0 1 0 7.85938-1.49219A36.00177 36.00177 0 1 0 41.30225 114.7522 63.5829 63.5829 0 0 0 8.79883 137.5957a4 4 0 1 0 6.39648 4.80469A55.58072 55.58072 0 0 1 60 120a4 4 0 0 0 0-8Z'/%3E%3C/svg%3E\");\n}\n\n@media screen and (min-width: 768px) {\n  body {\n    padding: 60px 0px;\n  }\n\n  h1 {\n    font-size: 3rem;\n  }\n\n  .page {\n    width: 70vw;\n  }\n\n  .container {\n    padding: 30px 70px;\n  }\n\n  .topics {\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 20px;\n  }\n}\n\n/**\n * WHAT IS THIS FILE?\n *\n * Globally applied styles. No matter which components are in the page or matching route,\n * the styles in here will be applied to the Document, without any sort of CSS scoping.\n *\n */\nhtml {\n  line-height: 1.5;\n  -webkit-text-size-adjust: 100%;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n    'Segoe UI Symbol', 'Noto Color Emoji';\n}\n\nbody {\n  padding: 0;\n  line-height: inherit;\n}\n"
            }
          },
          "root.tsx": {
            "file": {
              "contents": "import { component$ } from '@builder.io/qwik';\nimport { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';\nimport { RouterHead } from './components/router-head/router-head';\n\nimport './global.css';\n\nexport default component$(() => {\n  /**\n   * The root of a QwikCity site always start with the <QwikCityProvider> component,\n   * immediately followed by the document's <head> and <body>.\n   *\n   * Dont remove the `<head>` and `<body>` elements.\n   */\n\n  return (\n    <QwikCityProvider>\n      <head>\n        <meta charSet=\"utf-8\" />\n        <link rel=\"manifest\" href=\"/manifest.json\" />\n        <RouterHead />\n      </head>\n      <body lang=\"en\">\n        <RouterOutlet />\n        <ServiceWorkerRegister />\n      </body>\n    </QwikCityProvider>\n  );\n});\n"
            }
          },
          "routes": {
            "directory": {
              "demo": {
                "directory": {
                  "flower": {
                    "directory": {
                      "flower.css": {
                        "file": {
                          "contents": ".host {\n  display: grid;\n\n  align-items: center;\n  justify-content: center;\n  justify-items: center;\n  --rotation: 135deg;\n  --rotation: 225deg;\n  --size-step: 10px;\n  --odd-color-step: 5;\n  --even-color-step: 5;\n  --center: 12;\n\n  width: 100%;\n  height: 500px;\n\n  contain: strict;\n}\n\n.input {\n  width: 100%;\n}\n\n.square {\n  --size: calc(40px + var(--index) * var(--size-step));\n\n  display: block;\n  width: var(--size);\n  height: var(--size);\n  transform: rotateZ(calc(var(--rotation) * var(--state) * (var(--center) - var(--index))));\n  transition-property: transform, border-color;\n  transition-duration: 5s;\n  transition-timing-function: ease-in-out;\n  grid-area: 1 / 1;\n  background: white;\n  border-width: 2px;\n  border-style: solid;\n  border-color: black;\n  box-sizing: border-box;\n  will-change: transform, border-color;\n\n  contain: strict;\n}\n\n.square.odd {\n  --luminance: calc(1 - calc(calc(var(--index) * var(--odd-color-step)) / 256));\n  background: rgb(\n    calc(172 * var(--luminance)),\n    calc(127 * var(--luminance)),\n    calc(244 * var(--luminance))\n  );\n}\n\n.pride .square:nth-child(12n + 1) {\n  background: #e70000;\n}\n.pride .square:nth-child(12n + 3) {\n  background: #ff8c00;\n}\n.pride .square:nth-child(12n + 5) {\n  background: #ffef00;\n}\n.pride .square:nth-child(12n + 7) {\n  background: #00811f;\n}\n.pride .square:nth-child(12n + 9) {\n  background: #0044ff;\n}\n.pride .square:nth-child(12n + 11) {\n  background: #760089;\n}\n"
                        }
                      },
                      "index.tsx": {
                        "file": {
                          "contents": "import { component$, useVisibleTask$, useStore, useStylesScoped$ } from '@builder.io/qwik';\nimport { type DocumentHead, useLocation } from '@builder.io/qwik-city';\nimport styles from './flower.css?inline';\n\nexport default component$(() => {\n  useStylesScoped$(styles);\n  const loc = useLocation();\n\n  const state = useStore({\n    count: 0,\n    number: 20,\n  });\n\n  useVisibleTask$(({ cleanup }) => {\n    const timeout = setTimeout(() => (state.count = 1), 500);\n    cleanup(() => clearTimeout(timeout));\n\n    const internal = setInterval(() => state.count++, 7000);\n    cleanup(() => clearInterval(internal));\n  });\n\n  return (\n    <div class=\"section\">\n      <div class=\"container center\">\n        <input\n          type=\"range\"\n          value={state.number}\n          max={50}\n          onInput$={(ev) => {\n            state.number = (ev.target as HTMLInputElement).valueAsNumber;\n          }}\n        />\n        <div\n          style={{\n            '--state': `${state.count * 0.1}`,\n          }}\n          class={{\n            host: true,\n            pride: loc.url.searchParams.get('pride') === 'true',\n          }}\n        >\n          {Array.from({ length: state.number }, (_, i) => (\n            <div\n              key={i}\n              class={{\n                square: true,\n                odd: i % 2 === 0,\n              }}\n              style={{ '--index': `${i + 1}` }}\n            />\n          )).reverse()}\n        </div>\n      </div>\n    </div>\n  );\n});\n\nexport const head: DocumentHead = {\n  title: 'Qwik Flower',\n};\n"
                        }
                      }
                    }
                  },
                  "todolist": {
                    "directory": {
                      "index.tsx": {
                        "file": {
                          "contents": "import { component$ } from '@builder.io/qwik';\nimport {\n  type DocumentHead,\n  routeLoader$,\n  routeAction$,\n  zod$,\n  z,\n  Form,\n} from '@builder.io/qwik-city';\nimport styles from './todolist.module.css';\n\ninterface ListItem {\n  text: string;\n}\n\nexport const list: ListItem[] = [];\n\nexport const useListLoader = routeLoader$(() => {\n  return list;\n});\n\nexport const useAddToListAction = routeAction$(\n  (item) => {\n    list.push(item);\n    return {\n      success: true,\n    };\n  },\n  zod$({\n    text: z.string().trim().min(1),\n  })\n);\n\nexport default component$(() => {\n  const list = useListLoader();\n  const action = useAddToListAction();\n\n  return (\n    <>\n      <div class=\"section\">\n        <div class=\"container center\">\n          <h1 class=\"hero\">TODO List</h1>\n        </div>\n      </div>\n\n      <div class=\"section bright\">\n        <div class=\"container center mh-300\">\n          {(list.value.length && (\n            <ul class={styles.list}>\n              {list.value.map((item, index) => (\n                <li key={`items-${index}`}>{item.text}</li>\n              ))}\n            </ul>\n          )) || <span class=\"no-content\">No items found</span>}\n        </div>\n      </div>\n\n      <div class=\"section\">\n        <div class=\"container center\">\n          <Form action={action} spaReset>\n            <input type=\"text\" name=\"text\" required /> <button type=\"submit\">Add item</button>\n          </Form>\n\n          <p class={styles.hint}>PS: This little app works even when JavaScript is disabled.</p>\n        </div>\n      </div>\n    </>\n  );\n});\n\nexport const head: DocumentHead = {\n  title: 'Qwik Todo List',\n};\n"
                        }
                      },
                      "todolist.module.css": {
                        "file": {
                          "contents": ".list {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.list li {\n  list-style: none;\n}\n\n.hint {\n  font-size: 0.8rem;\n}\n"
                        }
                      }
                    }
                  }
                }
              },
              "index.tsx": {
                "file": {
                  "contents": "import { component$ } from '@builder.io/qwik';\nimport type { DocumentHead } from '@builder.io/qwik-city';\n\nimport Counter from '~/components/starter/counter/counter';\nimport Hero from '~/components/starter/hero/hero';\nimport Infobox from '~/components/starter/infobox/infobox';\nimport Starter from '~/components/starter/next-steps/next-steps';\n\nexport default component$(() => {\n  return (\n    <>\n      <Hero />\n\n      <div class=\"section bright\">\n        <div class=\"container center\">\n          <Starter />\n        </div>\n      </div>\n\n      <div class=\"section\">\n        <div class=\"container center\">\n          <h3>\n            You can <b>count</b> on me\n          </h3>\n          <Counter />\n        </div>\n      </div>\n\n      <div class=\"section\">\n        <div class=\"container topics\">\n          <Infobox>\n            <div q:slot=\"title\" class=\"icon icon-cli\">\n              CLI Commands\n            </div>\n            <>\n              <p>\n                <code>npm run dev</code>\n                <br />\n                Starts the development server and watches for changes\n              </p>\n              <p>\n                <code>npm run preview</code>\n                <br />\n                Creates production build and starts a server to preview it\n              </p>\n              <p>\n                <code>npm run build</code>\n                <br />\n                Creates production build\n              </p>\n              <p>\n                <code>npm run qwik add</code>\n                <br />\n                Runs the qwik CLI to add integrations\n              </p>\n            </>\n          </Infobox>\n\n          <div>\n            <Infobox>\n              <div q:slot=\"title\" class=\"icon icon-apps\">\n                Example Apps\n              </div>\n              <p>\n                Have a look at the <a href=\"/demo/flower\">Flower App</a> or the{' '}\n                <a href=\"/demo/todolist\">Todo App</a>.\n              </p>\n            </Infobox>\n\n            <Infobox>\n              <div q:slot=\"title\" class=\"icon icon-community\">\n                Community\n              </div>\n              <ul>\n                <li>\n                  <span>Questions or just want to say hi? </span>\n                  <a href=\"https://qwik.builder.io/chat\" target=\"_blank\">\n                    Chat on discord!\n                  </a>\n                </li>\n                <li>\n                  <span>Follow </span>\n                  <a href=\"https://twitter.com/QwikDev\" target=\"_blank\">\n                    @QwikDev\n                  </a>\n                  <span> on Twitter</span>\n                </li>\n                <li>\n                  <span>Open issues and contribute on </span>\n                  <a href=\"https://github.com/BuilderIO/qwik\" target=\"_blank\">\n                    GitHub\n                  </a>\n                </li>\n                <li>\n                  <span>Watch </span>\n                  <a href=\"https://qwik.builder.io/media/\" target=\"_blank\">\n                    Presentations, Podcasts, Videos, etc.\n                  </a>\n                </li>\n              </ul>\n            </Infobox>\n          </div>\n        </div>\n      </div>\n    </>\n  );\n});\n\nexport const head: DocumentHead = {\n  title: 'Welcome to Qwik',\n  meta: [\n    {\n      name: 'description',\n      content: 'Qwik site description',\n    },\n  ],\n};\n"
                }
              },
              "layout.tsx": {
                "file": {
                  "contents": "import { component$, Slot } from '@builder.io/qwik';\nimport { routeLoader$ } from '@builder.io/qwik-city';\n\nimport Header from '~/components/starter/header/header';\nimport Footer from '~/components/starter/footer/footer';\n\nexport const useServerTimeLoader = routeLoader$(() => {\n  return {\n    date: new Date().toISOString(),\n  };\n});\n\nexport default component$(() => {\n  return (\n    <div class=\"page\">\n      <main>\n        <Header />\n        <Slot />\n      </main>\n      <div class=\"section dark\">\n        <div class=\"container\">\n          <Footer />\n        </div>\n      </div>\n    </div>\n  );\n});\n"
                }
              },
              "service-worker.ts": {
                "file": {
                  "contents": "/*\n * WHAT IS THIS FILE?\n *\n * The service-worker.ts file is used to have state of the art prefetching.\n * https://qwik.builder.io/qwikcity/prefetching/overview/\n *\n * Qwik uses a service worker to speed up your site and reduce latency, ie, not used in the traditional way of offline.\n * You can also use this file to add more functionality that runs in the service worker.\n */\nimport { setupServiceWorker } from '@builder.io/qwik-city/service-worker';\n\nsetupServiceWorker();\n\naddEventListener('install', () => self.skipWaiting());\n\naddEventListener('activate', () => self.clients.claim());\n\ndeclare const self: ServiceWorkerGlobalScope;\n"
                }
              }
            }
          }
        }
      },
      "tsconfig.json": {
        "file": {
          "contents": "{\n  \"compilerOptions\": {\n    \"allowJs\": true,\n    \"target\": \"ES2017\",\n    \"module\": \"ES2020\",\n    \"lib\": [\"es2020\", \"DOM\", \"WebWorker\", \"DOM.Iterable\"],\n    \"jsx\": \"react-jsx\",\n    \"jsxImportSource\": \"@builder.io/qwik\",\n    \"strict\": true,\n    \"forceConsistentCasingInFileNames\": true,\n    \"resolveJsonModule\": true,\n    \"moduleResolution\": \"node\",\n    \"esModuleInterop\": true,\n    \"skipLibCheck\": true,\n    \"incremental\": true,\n    \"isolatedModules\": true,\n    \"outDir\": \"tmp\",\n    \"noEmit\": true,\n    \"types\": [\"node\", \"vite/client\"],\n    \"paths\": {\n      \"~/*\": [\"./src/*\"]\n    }\n  },\n  \"files\": [\"./.eslintrc.cjs\"],\n  \"include\": [\"src\"]\n}\n"
        }
      },
      "vite.config.ts": {
        "file": {
          "contents": "import { defineConfig } from 'vite';\nimport { qwikVite } from '@builder.io/qwik/optimizer';\nimport { qwikCity } from '@builder.io/qwik-city/vite';\nimport tsconfigPaths from 'vite-tsconfig-paths';\n\nexport default defineConfig(() => {\n  return {\n    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],\n    preview: {\n      headers: {\n        'Cache-Control': 'public, max-age=600',\n      },\n    },\n  };\n});\n"
        }
      }
    }
  }
};

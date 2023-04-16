import { defineConfig } from 'vite';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

export default defineConfig({
  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'X-Frame-Options': 'same-origin',
    },
  },
  plugins: [monacoEditorPlugin.default({
    languageWorkers: ['json', 'editorWorkerService'],
    customWorkers: [
        {
            label: 'graphql',
            entry: 'monaco-graphql/dist/graphql.worker'
        }
    ]
  })],
});
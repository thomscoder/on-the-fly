import * as monaco from 'monaco-editor';

export const createMonacoEditor = (container: HTMLDivElement): monaco.editor.IStandaloneCodeEditor => {
    const editor = monaco.editor.create(container, {
        value: 'console.log("Hello, world")',
        language: 'javascript',
        automaticLayout: true,
        readOnly: false,
        theme: getMonacoTheme("dark"),
        minimap: {
          enabled: false
        },
        renderLineHighlight: "none",
        scrollBeyondLastLine: false,
        fixedOverflowWidgets: true,
        wordWrap: "on"
    });

    return editor
}

function getMonacoTheme(theme: string) {
    switch (theme) {
      case "light":
        return "vs";
      case "dark":
        return "vs-dark";
      case "highContrast":
        return "hc-black";
      default:
        return "vs";
    }
  }
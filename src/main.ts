import { WebContainer } from "@webcontainer/api";
import { files } from "./files";
import {
  createTerminal,
  listenToElementChanges,
  openEditorArea,
  startShell,
} from "./actions/actions";
import { createMonacoEditor } from "./actions/monaco";
import { dragElement } from "./utilities/dragElement";
import "./style.css";
import "xterm/css/xterm.css";

let webcontainerInstance: WebContainer;

window.addEventListener("load", async () => {
  //boot webcontainer
  webcontainerInstance = await WebContainer.boot();
  await webcontainerInstance.mount(files);

  const terminal = createTerminal(terminalEl)!;

  // Install dependencies
  // const exitCode = await installDependencies(webcontainerInstance, {writeToElement: terminal});
  // if (exitCode !== 0) {
  //   throw new Error('Installation failed');
  // };

  //startDevServer(webcontainerInstance, {writeToElement: terminal}, iframeEl);

  if (editorEl) {
    dragElement(editorEl);
    const monacoEditor = createMonacoEditor(editorEl);
    // TODO to change this to edit other files independently of the chosen project
    monacoEditor
      .getModel()!
      .setValue(files.example.directory["index.js"].file.contents);
    listenToElementChanges("example", webcontainerInstance, monacoEditor);

    // open draggable editor clicking button
    if (buttonEl) {
      openEditorArea(buttonEl, editorEl);
    }
  }

  startShell(webcontainerInstance, iframeEl, {
    writeToElement: terminal,
    additionalElement: previewEl,
  });
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container">
    <div class="editor hidden">
    </div>
    <div class="sub-container">
      <div class="terminal"></div>
      <div class="preview">
        <iframe src="loading.html" frameBorder="0"></iframe>
        <button class="edit-button">Edit index.js</button>
      </div>
    </div>
  </div>
`;

const iframeEl = document.querySelector<HTMLIFrameElement>("iframe");
const editorEl = document.querySelector<HTMLDivElement>(".editor");
const terminalEl = document.querySelector<HTMLTextAreaElement>(".terminal");
const buttonEl = document.querySelector<HTMLButtonElement>(".edit-button");
const previewEl = document.querySelector<HTMLDivElement>(".preview");

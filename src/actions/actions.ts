import { WebContainer, WebContainerProcess } from '@webcontainer/api';
import { FitAddon } from 'xterm-addon-fit';
import { Terminal as XTerminal } from 'xterm'
import { writeProcess } from '../utilities/writers';
import { ProcessOptions, Terminal, editor } from '../utilities/types';

// TODO refactor
 
const fitAddon = new FitAddon();

export const installDependencies = async (webcontainerInstance: WebContainer, options: ProcessOptions) => {
    // Install dependencies
    const installationProcess = await webcontainerInstance.spawn('npm', ['install']);
    // write the installation process
    return writeProcess(installationProcess, options);
}


export const startDevServer = async (webcontainerInstance: WebContainer, options: ProcessOptions, element?: HTMLIFrameElement | null) => {
    // Run `npm run start` to start the Express app
    const serverProcess = await webcontainerInstance.spawn('npm', ['run', 'start']);

    writeProcess(serverProcess, options);
  
    // Wait for `server-ready` event
    webcontainerInstance.on('server-ready', (_, url) => {
      if (element) element.src = url;
    });
    
}


export const writeIndexJS = async (path: string, webcontainerInstance: WebContainer, content: string) => {
    await webcontainerInstance.fs.writeFile(`/${path}/index.js`, content);
};

export const listenToElementChanges = (path: string, webcontainerInstance: WebContainer, monacoEditor: editor.IStandaloneCodeEditor) => {
    const model = monacoEditor.getModel();
    if (!model) return;
    model.onDidChangeContent((e: editor.IModelContentChangedEvent) => { // to change.. better at save file
        const value = model.getValue()
        writeIndexJS(path, webcontainerInstance, value);
    })
}

export const createTerminal = (term: HTMLTextAreaElement | null) => {
    if (!term) return;
    
    const terminal = new XTerminal({
        convertEol: true,
        fontSize: 11,
        allowTransparency: true,
        theme: {
            background: "#161b22",
        }
    });

    
    terminal.loadAddon(fitAddon);
    terminal.open(term);
    fitAddon.fit();
    

    return terminal;
}

export const startShell = async (webcontainerInstance: WebContainer, targetEl: HTMLIFrameElement | null, options: ProcessOptions) => {
    const shellProcess = await webcontainerInstance.spawn('jsh', {
        terminal: {
            cols: options.writeToElement?.cols,
            rows: options.writeToElement?.rows,
          },
    });
    writeProcess(shellProcess, options);
    if (options.writeToElement) {
        writeInput(shellProcess, options.writeToElement);
        // When server is ready to accept requests
        if (options.additionalElement && targetEl) webcontainerInstance.on('server-ready', (_, url) => {
            if (options.additionalElement) {
                options.additionalElement.style.visibility = "visible"
            }
            
            targetEl.src = url;
        });
    }

    window.addEventListener('resize', () => {
        fitAddon.fit();
        shellProcess.resize({
          cols: options.writeToElement.cols,
          rows: options.writeToElement.rows,
        });
      });

    return shellProcess
};

const writeInput = (process: WebContainerProcess, terminal: Terminal) => {
    const input = process.input.getWriter();
    terminal.onData((data) => {
        input.write(data);
    });
}


export const openEditorArea = (button: HTMLButtonElement, editorArea: HTMLDivElement) => {
    button.onclick = () => {
        editorArea.classList.toggle('hidden');
    }
}
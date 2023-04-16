import type { Terminal } from 'xterm';
import {editor} from 'monaco-editor'
export type ProcessOptions = {
    packgageManager?: string
    writeToElement: Terminal;
    additionalElement: HTMLElement | null;
}

export {Terminal, editor};
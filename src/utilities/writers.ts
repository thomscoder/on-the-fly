import { WebContainerProcess } from '@webcontainer/api';
import { ProcessOptions, Terminal } from './types';

export const writeToConsole = (process: WebContainerProcess): Promise<number> => {
    process.output.pipeTo(new WritableStream({
        write(data) {
          console.log(data);
        }
    }));

    return process.exit;
}

export const writeToTerminal = (process: WebContainerProcess, terminal: Terminal): Promise<number> => {
    process.output.pipeTo(new WritableStream({
        write(data) {
          terminal.write(data);
        }
    }));

    return process.exit;
}

export const writeProcess = (process: WebContainerProcess, options: ProcessOptions): Promise<number> => {
    if (options.writeToElement) {
        return writeToTerminal(process, options.writeToElement)
    } else {
        return writeToConsole(process);
    }
}
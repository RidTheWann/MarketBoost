
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const LOG_DIR = 'logs';

if (!existsSync(LOG_DIR)) {
  mkdirSync(LOG_DIR);
}

export const logger = {
  error: (message: string, error?: any) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[ERROR][${timestamp}] ${message}\n${error ? JSON.stringify(error) : ''}\n`;
    writeFileSync(join(LOG_DIR, 'error.log'), logMessage, { flag: 'a' });
    console.error(logMessage);
  },
  info: (message: string) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[INFO][${timestamp}] ${message}\n`;
    writeFileSync(join(LOG_DIR, 'info.log'), logMessage, { flag: 'a' });
    console.log(logMessage);
  }
};

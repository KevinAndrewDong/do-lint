import { execSync } from 'child_process';

export const runCommand = (command: string, cwd: string): void => {
  execSync(command, { cwd, stdio: 'inherit' });
};

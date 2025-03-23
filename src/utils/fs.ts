import { promises as fs } from 'fs';
import { join } from 'path';

export const ensureDirectoryExists = async (path: string): Promise<void> => {
  try {
    await fs.access(path);
  } catch {
    await fs.mkdir(path, { recursive: true });
  }
};

export const writeFile = async (path: string, content: string): Promise<void> => {
  await fs.writeFile(path, content, 'utf-8');
};

export const readFile = async (path: string): Promise<string> => {
  return await fs.readFile(path, 'utf-8');
};

export const fileExists = async (path: string): Promise<boolean> => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};

export const copyFile = async (source: string, target: string): Promise<void> => {
  const content = await readFile(source);
  await writeFile(target, content);
};

export type ProjectType =
  | 'vue-ts'
  | 'vue-js'
  | 'react-ts'
  | 'react-js'
  | 'angular-ts'
  | 'angular-js'
  | 'node-ts'
  | 'node-js';

export interface ProjectConfig {
  type: ProjectType;
  name: string;
  root: string;
}

export interface Dependencies {
  devDependencies: Record<string, string>;
  dependencies: Record<string, string>;
}

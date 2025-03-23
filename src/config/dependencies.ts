import { Dependencies, ProjectType } from '../types';

const commonDevDependencies = {
  eslint: '^8.56.0',
  prettier: '^3.1.1',
  'lint-staged': '^13.2.3',
  husky: '^8.0.3',
  '@typescript-eslint/eslint-plugin': '^6.15.0',
  '@typescript-eslint/parser': '^6.15.0',
  typescript: '^5.3.3',
  '@types/node': '^20.10.5',
} as const;

const vueDependencies = {
  'eslint-plugin-vue': '^9.19.2',
  '@vue/eslint-config-typescript': '^12.0.0',
  '@vue/eslint-config-prettier': '^8.0.0',
  '@vue/eslint-config-standard': '^8.0.1',
  'eslint-plugin-import': '^2.29.1',
  'eslint-plugin-node': '^11.1.0',
  'eslint-plugin-promise': '^6.1.1',
} as const;

const reactDependencies = {
  'eslint-plugin-react': '^7.33.2',
  'eslint-plugin-react-hooks': '^4.6.0',
  '@types/react': '^18.2.45',
  '@types/react-dom': '^18.2.18',
} as const;

const angularDependencies = {
  '@angular-eslint/eslint-plugin': '^17.0.0',
  '@angular-eslint/eslint-plugin-template': '^17.0.0',
  '@angular-eslint/template-parser': '^17.0.0',
  '@typescript-eslint/parser': '^6.15.0',
  'eslint-plugin-import': '^2.29.1',
} as const;

export const getDependencies = (type: ProjectType): Dependencies => {
  const devDependencies = { ...commonDevDependencies };

  switch (type) {
    case 'vue-ts':
    case 'vue-js':
      Object.assign(devDependencies, vueDependencies);
      break;
    case 'react-ts':
    case 'react-js':
      Object.assign(devDependencies, reactDependencies);
      break;
    case 'angular-ts':
    case 'angular-js':
      Object.assign(devDependencies, angularDependencies);
      break;
  }

  if (!type.includes('ts')) {
    const {
      '@typescript-eslint/eslint-plugin': _tsPlugin,
      '@typescript-eslint/parser': _tsParser,
      typescript: _ts,
      '@types/node': _nodeTypes,
      ...rest
    } = devDependencies;
    return {
      devDependencies: rest,
      dependencies: {},
    };
  }

  return {
    devDependencies,
    dependencies: {},
  };
};

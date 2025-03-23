import { ProjectType } from '../types';

const baseConfig = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,md}': ['prettier --write'],
  '*.config.{js,ts}': ['eslint --config .eslintrc.config.js --fix', 'prettier --write'],
};

const vueConfig = {
  '*.{js,jsx,ts,tsx,vue}': ['eslint --fix', 'prettier --write'],
  '*.{json,md}': ['prettier --write'],
  '*.config.{js,ts}': ['eslint --config .eslintrc.config.js --fix', 'prettier --write'],
};

const reactConfig = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,md}': ['prettier --write'],
  '*.config.{js,ts}': ['eslint --config .eslintrc.config.js --fix', 'prettier --write'],
};

const angularConfig = {
  '*.{js,jsx,ts,tsx,html}': ['eslint --fix', 'prettier --write'],
  '*.{json,md,scss,css}': ['prettier --write'],
  '*.config.{js,ts}': ['eslint --config .eslintrc.config.js --fix', 'prettier --write'],
};

export const getLintStagedConfig = (type: ProjectType): Record<string, string[]> => {
  switch (type) {
    case 'vue-ts':
    case 'vue-js':
      return vueConfig;
    case 'react-ts':
    case 'react-js':
      return reactConfig;
    case 'angular-ts':
    case 'angular-js':
      return angularConfig;
    default:
      return baseConfig;
  }
};

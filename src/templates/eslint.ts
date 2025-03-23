import { ProjectType } from '../types';

interface ESLintConfig {
  root: boolean;
  env: {
    browser?: boolean;
    es2020?: boolean;
    node?: boolean;
  };
  extends: string[];
  parser?: string;
  parserOptions?: {
    ecmaVersion?: number;
    sourceType?: string;
    ecmaFeatures?: {
      jsx?: boolean;
    };
    parser?: string;
  };
  plugins?: string[];
  rules: Record<string, string | [string, any]>;
}

export const getEslintConfig = (type: ProjectType): ESLintConfig => {
  const config: ESLintConfig = {
    root: true,
    env: {
      browser: true,
      es2020: true,
    },
    extends: ['eslint:recommended'],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'no-undef': 'error',
    },
  };

  switch (type) {
    case 'vue-ts':
      config.extends.push(
        'plugin:vue/vue3-recommended',
        '@vue/typescript/recommended',
        '@vue/prettier'
      );
      config.parser = 'vue-eslint-parser';
      config.parserOptions = {
        ...config.parserOptions,
        parser: '@typescript-eslint/parser',
        ecmaFeatures: {
          jsx: true,
        },
      };
      config.plugins = ['vue'];
      break;

    case 'vue-js':
      config.extends.push('plugin:vue/vue3-recommended', '@vue/standard');
      config.parser = 'vue-eslint-parser';
      config.parserOptions = {
        ...config.parserOptions,
        ecmaFeatures: {
          jsx: true,
        },
      };
      config.plugins = ['vue'];
      break;

    case 'react-ts':
      config.extends.push(
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended'
      );
      config.parserOptions = {
        ...config.parserOptions,
        ecmaFeatures: {
          jsx: true,
        },
      };
      config.plugins = ['react', 'react-hooks'];
      config.rules = {
        ...config.rules,
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
      };
      break;

    case 'react-js':
      config.extends.push('plugin:react/recommended', 'plugin:react-hooks/recommended');
      config.parserOptions = {
        ...config.parserOptions,
        ecmaFeatures: {
          jsx: true,
        },
      };
      config.plugins = ['react', 'react-hooks'];
      config.rules = {
        ...config.rules,
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
      };
      break;

    case 'angular-ts':
      config.extends.push('@angular-eslint/recommended', '@angular-eslint/template/recommended');
      config.parser = '@angular-eslint/template-parser';
      config.plugins = ['@angular-eslint/template'];
      break;

    case 'angular-js':
      config.extends.push('angular');
      config.plugins = ['angular'];
      break;
  }

  return config;
};

export const getConfigFilesEslintConfig = (): ESLintConfig => ({
  root: true,
  env: {
    node: true,
    es2020: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'commonjs',
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'no-undef': 'off',
  },
});

# go-lint

[![npm version](https://img.shields.io/npm/v/go-lint.svg)](https://www.npmjs.com/package/go-lint)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

一个快速初始化前端项目代码质量工具的 CLI 工具。一键配置 ESLint、Prettier、Husky 和 lint-staged，支持 Vue、React 和 Angular 项目。

## 特性

- 🚀 一键配置，快速上手
- 🎯 支持多种项目类型
  - Vue (TypeScript/JavaScript)
  - React (TypeScript/JavaScript)
  - Angular (TypeScript/JavaScript)
- ✨ 集成多个代码质量工具
  - ESLint：代码质量检查
  - Prettier：代码格式化
  - Husky：Git hooks 管理
  - lint-staged：针对暂存文件运行 linters

## 安装

```bash
npm install -g go-lint
```

## 使用方法

### 交互式使用

直接运行 `go-lint init` 命令，工具会引导你选择项目类型和路径：

```bash
go-lint init
```

你将看到类似这样的交互提示：

```bash
? 选择项目类型: (Use arrow keys)
❯ Vue + TypeScript
  Vue + JavaScript
  React + TypeScript
  React + JavaScript
  Angular + TypeScript
  Angular + JavaScript

? 输入项目路径: (./)
```

### 命令行参数使用

你也可以直接使用命令行参数来指定项目类型和路径：

```bash
go-lint init -t <project-type> -p <project-path>
```

### 项目类型

支持以下项目类型：

- `vue-ts`: Vue + TypeScript
- `vue-js`: Vue + JavaScript
- `react-ts`: React + TypeScript
- `react-js`: React + JavaScript
- `angular-ts`: Angular + TypeScript
- `angular-js`: Angular + JavaScript

### 使用示例

```bash
# 交互式使用
go-lint init

# 使用命令行参数
go-lint init -t vue-ts
go-lint init -t react-js
go-lint init -t angular-ts

# 在指定目录初始化
go-lint init -t vue-ts -p ./my-vue-project
```

### 初始化后的文件结构

```
your-project/
├── .eslintrc.js           # ESLint 配置
├── .eslintrc.config.js    # 配置文件专用的 ESLint 配置
├── .prettierrc.js         # Prettier 配置
├── .lintstagedrc.js       # lint-staged 配置
├── .husky/                # Git hooks 配置
│   └── pre-commit        # pre-commit hook
└── package.json          # 项目配置（已更新）
```

### 初始化后的 npm 脚本

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx,.vue",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx,.vue --fix",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,vue,json,md}\"",
    "prepare": "husky install"
  }
}
```

## 配置说明

### ESLint

- 基础配置：`eslint:recommended`
- Vue 项目：
  - TypeScript：`@vue/typescript/recommended`
  - JavaScript：`@vue/standard`
- React 项目：
  - `plugin:react/recommended`
  - `plugin:react-hooks/recommended`
- Angular 项目：
  - `@angular-eslint/recommended`
  - `@angular-eslint/template/recommended`

### Prettier

统一的代码格式化配置：

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 100,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

### lint-staged

针对不同类型的文件运行相应的检查：

- `*.{js,jsx,ts,tsx,vue}`: ESLint
- `*.{json,md}`: Prettier
- `*.{css,scss,less}`: Prettier

### Git Hooks

- pre-commit: 运行 lint-staged

## 本地开发

1. 克隆仓库

```bash
git clone https://github.com/KevinAndrewDong/go-lint.git
cd go-lint
```

2. 安装依赖

```bash
npm install
```

3. 构建项目

```bash
npm run build
```

4. 链接到全局

```bash
npm link
```

## 常见问题

### Q: 为什么需要全局安装？

A: 全局安装可以让你在任何项目中使用 `go-lint` 命令，而不需要每次都安装。

### Q: 如何在现有项目中使用？

A: 只需在项目根目录下运行 `go-lint init -t <project-type>` 即可。工具会自动检测并保留已有的配置。

### Q: 如何自定义配置？

A: 初始化后，你可以直接修改生成的配置文件：

- ESLint: `.eslintrc.js`
- Prettier: `.prettierrc.js`
- lint-staged: `.lintstagedrc.js`

### Q: 遇到 EACCES 权限错误怎么办？

A: 这通常是因为 npm 全局安装权限问题，可以尝试：

1. 使用 `sudo npm install -g go-lint`
2. 或者参考 [npm 文档](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) 修复权限问题

## License

MIT

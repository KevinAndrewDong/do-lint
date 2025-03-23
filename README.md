# do-lint

[![npm version](https://img.shields.io/npm/v/do-lint.svg)](https://www.npmjs.com/package/do-lint)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

一键配置前端项目代码质量工具，支持 Vue、React 和 Angular。

## 功能

- 一键配置 ESLint、Prettier、Husky 和 lint-staged
- 支持 Vue、React、Angular (TypeScript/JavaScript)
- 自动格式化代码，提交前检查

## 安装

```bash
npm install -g do-lint
```

## 使用

### 方式一：交互式

```bash
do-lint init
```

### 方式二：命令行

```bash
do-lint init -t vue-ts     # Vue + TypeScript
do-lint init -t react-js   # React + JavaScript
do-lint init -t angular-ts # Angular + TypeScript
```

支持的项目类型：

- `vue-ts` / `vue-js`
- `react-ts` / `react-js`
- `angular-ts` / `angular-js`

## 配置说明

初始化后会生成以下配置文件：

```
├── .eslintrc.js           # 代码检查
├── .prettierrc.js         # 代码格式化
├── .lintstagedrc.js       # Git 提交前检查
└── .husky/                # Git hooks
```

## License

MIT

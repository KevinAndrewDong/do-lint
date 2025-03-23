# Easy Lint

一个快速配置代码规范工具的命令行工具，一键安装和配置 ESLint、Prettier、Lint-staged 和 Git hooks。

## 功能特点

- 自动安装和配置 ESLint
- 自动安装和配置 Prettier
- 自动安装和配置 Lint-staged
- 自动配置 Git hooks（使用 husky）
- 提供常用的代码规范配置

## 安装

```bash
npm install easy-lint --save-dev
```

## 使用方法

1. 安装依赖：

```bash
npm install
```

2. 初始化 Git hooks：

```bash
npm run prepare
```

3. 运行代码检查：

```bash
npm run lint
```

4. 格式化代码：

```bash
npm run format
```

## 配置说明

- ESLint 配置：`.eslintrc.js`
- Prettier 配置：`.prettierrc`
- Lint-staged 配置：`.lintstagedrc.js`
- Git hooks 配置：`.husky/`

## License

MIT

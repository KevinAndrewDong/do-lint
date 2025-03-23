import { writeFileSync } from 'fs';
import { join } from 'path';
import { getEslintConfig, getConfigFilesEslintConfig } from './templates/eslint';
import { getPrettierConfig } from './templates/prettier';
import { getLintStagedConfig } from './templates/lint-staged';
import { getDependencies } from './config/dependencies';
import { ProjectType } from './types';
import { ensureDirectoryExists, writeFile, readFile } from './utils/fs';
import { runCommand } from './utils/command';

export const init = async (projectPath: string, type: ProjectType) => {
  try {
    // 确保项目目录存在
    await ensureDirectoryExists(projectPath);

    // 读取 package.json
    const packageJsonPath = join(projectPath, 'package.json');
    const packageJson = JSON.parse(await readFile(packageJsonPath));

    // 更新 package.json
    packageJson.scripts = {
      ...packageJson.scripts,
      lint: 'eslint . --ext .js,.jsx,.ts,.tsx,.vue',
      'lint:fix': 'eslint . --ext .js,.jsx,.ts,.tsx,.vue --fix',
      format: 'prettier --write "**/*.{js,jsx,ts,tsx,vue,json,md}"',
      prepare: 'husky install',
    };

    // 添加开发依赖
    const { devDependencies } = getDependencies(type);
    packageJson.devDependencies = {
      ...packageJson.devDependencies,
      ...devDependencies,
    };

    // 写入更新后的 package.json
    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    // 写入 ESLint 配置文件
    await writeFile(
      join(projectPath, '.eslintrc.js'),
      `module.exports = ${JSON.stringify(getEslintConfig(type), null, 2)};`
    );
    await writeFile(
      join(projectPath, '.eslintrc.config.js'),
      `module.exports = ${JSON.stringify(getConfigFilesEslintConfig(), null, 2)};`
    );

    // 写入 Prettier 配置文件
    await writeFile(
      join(projectPath, '.prettierrc.js'),
      `module.exports = ${JSON.stringify(getPrettierConfig(), null, 2)};`
    );

    // 写入 lint-staged 配置文件
    await writeFile(
      join(projectPath, '.lintstagedrc.js'),
      `module.exports = ${JSON.stringify(getLintStagedConfig(type), null, 2)};`
    );

    // 初始化 husky
    await runCommand('npm run prepare', projectPath);

    // 添加 pre-commit hook
    await runCommand('npx husky add .husky/pre-commit "npx lint-staged"', projectPath);

    // 安装依赖
    await runCommand('npm install', projectPath);

    console.log('✨ 代码质量工具初始化完成！');
  } catch (error) {
    console.error('初始化失败:', error);
    process.exit(1);
  }
};

#!/usr/bin/env node

import { Command } from 'commander';
import { init } from './init';
import { ProjectType } from './types';
import { version } from '../package.json';

const program = new Command();

program.name('go-lint').description('快速初始化前端项目的代码质量工具').version(version);

program
  .command('init')
  .description('初始化代码质量工具')
  .option(
    '-t, --type <type>',
    '项目类型 (vue-ts, vue-js, react-ts, react-js, angular-ts, angular-js)'
  )
  .option('-p, --path <path>', '项目路径', '.')
  .action(async (options) => {
    const type = options.type as ProjectType;
    const projectPath = options.path;

    if (!type) {
      console.error('请指定项目类型');
      process.exit(1);
    }

    await init(projectPath, type);
  });

program.parse();

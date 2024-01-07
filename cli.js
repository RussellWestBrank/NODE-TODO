#!/usr/bin/env node
const program = require('commander')
const api = require('./index.js')
const pkg = require('./package.json')

program
  .version(pkg.version)
program
  .command('add')
  .description('add a task')
  .action((...args) => {
    const words = args[1].args.join(' ')
    api.add(words).then(() => {console.log('添加成功')}, () => {console.log('添加失败')})
  })
program
  .command('clear')
  .description('clear all tasks')
  .action(() => {
    api.clear().then(() => {console.log('清除完毕')}, () => {console.log('清除失败')})
  })

  // 添加默认命令来处理用户没有输入任何命令时的情况
program
  .action(() => {
    api.showAll().then(() => {console.log('显示所有任务')}, () => {console.log('显示失败')});
  });

program.parse(process.argv)





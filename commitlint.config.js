/*
 * @Descripttion: commit校验
 * @Author: 19080088
 * @Date: 2021-01-25 11:48:24
 * @LastEditors: 19080088
 * @LastEditTime: 2021-01-25 16:41:48
 */
module.exports = {
  // 继承默认配置
  extends: ['@commitlint/config-angular'],
  // 自定义规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'build',
        'ci',
        'chore',
        'revert',
        'test',
        'refactor',
      ],
    ],
    'header-max-length': [0, 'always', 72],
  },
}


/*
 * @Descripttion: 配置babel
 * @Author: 19080088
 * @Date: 2021-01-25 11:44:29
 * @LastEditors: 19080088
 * @LastEditTime: 2021-01-25 14:58:15
 */

module.exports = {
  presets: [
    ['@babel/env', {
      loose: true,
      modules: false,
    }],
    '@babel/typescript',
  ],
  plugins: [
    '@vue/babel-plugin-jsx',
    '@babel/proposal-class-properties',
    '@babel/transform-runtime',
    'lodash',
  ],
  overrides: [
    {
      test: /\.vue$/,
      plugins: [
        '@babel/transform-typescript',
      ],
    },
  ],
  env: {
    utils: {
      ignore: [
        '**/*.test.ts',
        '**/*.spec.ts',
      ],
      presets: [
        [
          '@babel/env',
          {
            loose: true,
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          'babel-plugin-module-resolver',
        ],
      ],
    },
  },
}

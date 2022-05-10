/* eslint @typescript-eslint/no-var-requires: "off" */
/* eslint import/no-extraneous-dependencies: "off" */

const babel = require('rollup-plugin-babel');
const {nodeResolve} = require('@rollup/plugin-node-resolve');
const external = require('rollup-plugin-peer-deps-external');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const json = require('@rollup/plugin-json');
const cleanup = require('rollup-plugin-cleanup');

module.exports = [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'build/index.js',
        format: 'cjs',
      },
      {
        file: 'build/index.esm.js',
        format: 'esm',
      },
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react', '@babel/preset-typescript'],
      }),
      external(),
      nodeResolve({
        customResolveOptions: {
          moduleDirectories: ['node_modules'],
        },
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      json({
        compact: true,
      }),
      cleanup(),
    ],
  },
];

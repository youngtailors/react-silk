import path from 'path'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'

const reslv = p => path.resolve(__dirname, p)

const root = process.platform === 'win32' ? path.resolve('/') : '/'
const external = id => !id.startsWith('.') && !id.startsWith(root)
const extensions = ['.js', '.jsx', '.ts', '.tsx']
const getBabelOptions = ({ useESModules }) => ({
  babelrc: false,
  extensions,
  exclude: '**/node_modules/**',
  runtimeHelpers: true,
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
        targets: '>1%, not dead, not ie 11, not op_mini all',
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    ['transform-react-remove-prop-types', { removeImport: true }],
    ['@babel/plugin-transform-runtime', { regenerator: false, useESModules }],
  ],
})

const plugins = [
  sizeSnapshot(),
  resolve({
    extensions,
  }),
]

export default [
  {
    input: reslv('src/index.ts'),
    output: { format: 'es', file: reslv('dist/react-silk-ui.es.js') },
    external,
    plugins: [babel(getBabelOptions({ useESModules: true })), ...plugins],
  },
  {
    input: reslv('src/index.ts'),
    output: {
      format: 'cjs',
      file: reslv('dist/react-silk-ui.js'),
      exports: 'named',
    },
    external,
    plugins: [babel(getBabelOptions({ useESModules: false })), ...plugins],
  },
]

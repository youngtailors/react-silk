import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

const reslv = p => path.resolve(__dirname, p)

const root = process.platform === 'win32' ? path.resolve('/') : '/'
const external = id => !id.startsWith('.') && !id.startsWith(root)
const extensions = ['.js', '.jsx', '.ts', '.tsx']

const plugins = [resolve({ extensions }), typescript()]

export default [
  {
    input: reslv('src/index.ts'),
    output: [
      {
        format: 'es',
        file: reslv('dist/react-silk-ui.es.js'),
      },
      {
        format: 'cjs',
        file: reslv('dist/react-silk-ui.js'),
        exports: 'named',
      },
    ],
    plugins,
    external,
  },
]

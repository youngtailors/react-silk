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
    input: reslv('src/index.tsx'),
    output: [
      {
        format: 'es',
        file: reslv('dist/react-silk-form.es.js'),
      },
      {
        format: 'cjs',
        file: reslv('dist/react-silk-form.js'),
        exports: 'named',
      },
    ],
    plugins,
    external,
  },
]

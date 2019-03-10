import path from 'path'
import typescript from 'rollup-plugin-typescript2'

const reslv = p => path.resolve(__dirname, p)

const plugins = [typescript()]

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
        file: reslv('dist/react-silk-form.common.js'),
        exports: 'named',
      },
    ],
    plugins,
    external: ['react', 'react-native'],
  },
]

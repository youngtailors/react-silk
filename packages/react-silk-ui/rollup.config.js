import path from 'path'
import typescript from 'rollup-plugin-typescript2'
import { uglify } from 'rollup-plugin-uglify'

const reslv = p => path.resolve(__dirname, p)

const plugins = [typescript()]

export default [
  {
    input: reslv('src/index.ts'),
    output: [
      {
        format: 'es',
        file: reslv('dist/react-silk.es.js'),
      },
      {
        format: 'cjs',
        file: reslv('dist/react-silk.common.js'),
        exports: 'named',
      },
    ],
    plugins,
    external: ['react', 'react-native'],
  },
  /* 
    TODO: Build IIFE
    Now we can't build iife script,
    because React Native Web doesn't support it :D
  */
  // {
  //   input: reslv('src/index.ts'),
  //   output: {
  //     format: 'iife',
  //     file: reslv('dist/react-silk.iife.js'),
  //     name: 'reactsilk',
  //     exports: 'named',
  //     globals: {
  //       react: 'React',
  //     },
  //   },
  //   external: ['react'],
  //   plugins: [
  //     ...plugins,
  //     uglify({
  //       compress: { unused: true, dead_code: true },
  //     }),
  //   ],
  // },
]

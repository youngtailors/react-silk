/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { resolve } = require('path')

exports.onCreateWebpackConfig = ({ actions: { setWebpackConfig } }) =>
  setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.ttf/,
          loader: 'file-loader',
          include: resolve(__dirname, 'node_modules/react-native-vector-icons'),
        },
      ],
    },
  })

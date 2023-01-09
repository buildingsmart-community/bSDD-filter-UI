// module.exports = {
//   entry: './src/index.tsx',
//   output: {
//     filename: 'bsdd-search.js',
//     library: {
//       type: 'umd',
//       name: 'BsddSearch',
//     },
//     // prevent error: `Uncaught ReferenceError: self is not define`
//     globalObject: 'this',
//   },
// }

// const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    library: {
      type: 'umd',
      name: 'BsddSearch',
    },
    // path: path.resolve(__dirname, 'dist'),
  },
}

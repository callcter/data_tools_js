module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    filename: 'data_tools_js.js',
    library: {
      name: 'data_tools_js',
      type: 'this'
    }
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
}
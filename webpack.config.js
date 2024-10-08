const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    filename: 'data_tools_js.min.js',
    // path: path.resolve(__dirname, 'dist'),
    // library: 'data_tools_js',
    library: {
      name: 'data_tools_js',
      type: 'umd',
    //   umdNameDefine: true,
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
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
}
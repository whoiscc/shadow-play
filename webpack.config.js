const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  target: "node",
  mode: "development",
  entry: {
    app: ["./backend.js"]
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "backend.js",
  },
  externals: [nodeExternals({
    allowlist: ['shadow-play']
  })],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
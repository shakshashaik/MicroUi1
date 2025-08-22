const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: { port: 3001, historyApiFallback: true, hot: true },
  output: { publicPath: "http://localhost:3001/", path: path.resolve(__dirname, "build"), clean: true },
  module: {
    rules: [{ test: /\.jsx?$/, exclude: /node_modules/, use: "babel-loader" }]
  },
  
  resolve: { extensions: [".js", ".jsx"] },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: { "./Page": "./src/Page.js" },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
        "react-router-dom": { singleton: true, requiredVersion: false }
      }
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" })
  ]
};

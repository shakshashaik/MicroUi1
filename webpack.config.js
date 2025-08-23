// webpack.config.js (CART)
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = (_, argv) => {
  const isProd = argv.mode === "production";

  return {
    entry: "./src/index.js",
    mode: isProd ? "production" : "development",
    devServer: { port: 3001, historyApiFallback: true, hot: true },
    output: {
      publicPath: "auto",                 // ✅ key change
      path: path.resolve(__dirname, "build"),
      clean: true
    },
    module: { rules: [{ test: /\.jsx?$/, exclude: /node_modules/, use: "babel-loader" }] },
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
};

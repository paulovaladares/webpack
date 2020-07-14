const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const nodeEnv =
  process.env.NODE_ENV || "production"; /* "production" || "development" */
const path = require("path");

const config = {
  mode: nodeEnv,
  devtool:
    "source-map" /* "cheap-eval-source-map" || "eval-source-map" || "source-map" */,
  entry: "./src/app.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        extractComments: true,
        sourceMap: true,
      }),
    ],
  },
};

module.exports = config;

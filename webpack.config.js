const path = require("path");

const config = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, ""),
    filename: "./src/build.js",
  },
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
};

module.exports = config;

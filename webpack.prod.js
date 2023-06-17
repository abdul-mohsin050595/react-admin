const path = require("path");
const HtmlWebpackPlugin = require("HTML-webpack-plugin");

module.exports = [
  {
    entry: "./src/index.js",
    mode: "production",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        publicPath: "/",
      }),
    ],
    resolve: {
      extensions: [".js", ".jsx", ".json"],
    },
    devtool: "source-map",
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, 'public'),
    //     },
    //     port: 3001,
    //     proxy: {
    //         '/api': 'http://localhost:8080',
    //     },
    // },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg)$/i,
          type: "asset/resource",
        },
      ],
    },
  },
];

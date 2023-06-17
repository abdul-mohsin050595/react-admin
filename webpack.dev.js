const path = require("path");
const HtmlWebpackPlugin = require("HTML-webpack-plugin");
// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = [
    {
        entry: "./src/index.js",
        mode: "development",
        // output: {
        //     path: path.resolve(__dirname, 'dist'),
        //     filename: 'index_bundle.js',
        //   },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
                publicPath: '/',
            })
            // new NodePolyfillPlugin()
        ],
        resolve: {
            extensions: [".js", ".jsx"],
        },
        devtool: "cheap-source-map",
        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            port: 3001,
            historyApiFallback: true,
            proxy: {
                '/api': {
                    target: 'http://localhost:8080',
                    changeOrigin: true,
                }
            },

        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        },
                    }
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.(png|svg)$/i,
                    type: "asset/resource"

                }
            ]
        }
    }
]
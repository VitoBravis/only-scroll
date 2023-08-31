const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    mode: "development",
    entry: "./dev/dev.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'dev.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'dev', 'index.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'demo.html',
            template: path.join(__dirname, 'demo', 'index.html')
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    devServer: {
        port: 3005,
        hot: true
    }
}
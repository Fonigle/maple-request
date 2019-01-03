const webpack = require('webpack');
const path = require('path');

const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const os = require("os");
const networkInterfaces = os.networkInterfaces();

let ip = "";
for (var key in networkInterfaces) {
    networkInterfaces[key].forEach(item => {
        if (!item.internal && item.family === "IPv4") {
            ip = item.address;
        }
    });
}

const port = 15406;

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        host: ip,
        port,
        hot: true,
        open: true,
        historyApiFallback: true,
        quiet: true,
    },
    entry: {
        index: [path.resolve("dev/main.ts")]
    },
    devtool: "#cheap-module-source-map",
    watchOptions: {
        ignored: /node_modules/,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlPlugin({
            filename: "index.html",
            template: path.resolve("dev/index.html"),
            showErrors: true
        }),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [
                    `Your app is running at: http://${ip}:${port}`,
                ],
                notes: []
            }
        }),
    ]
});

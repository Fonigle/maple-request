const path = require('path');

const baseCfg = require('./webpack.base.config');

const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(baseCfg, {
    mode: 'production',
    entry: {
        'maple-ui': [path.resolve("src/main.ts")]
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    devtool: false,
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve('./')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),

    ],
    externals: {
        vue: 'vue',
        axios: 'axios'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    safe: true
                },
            })
        ]
    }
})

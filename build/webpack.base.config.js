const path = require("path");
const webpack = require("webpack");

const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.MODE;

//开发环境下不单独提取css
const styleLoader =
    mode === "production" ? MiniCssExtractPlugin.loader : "style-loader";

module.exports = {
    output: {
        publicPath: "/",
    },
    resolve: {
        extensions: [".js", ".vue", ".json", ".ts"],
        alias: {
            vue$: "vue/dist/vue.runtime.esm.js",
            "@": path.resolve("src"),
            mixins: path.resolve("src/mixins")
        }
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: [
                    path.resolve("src"),
                    path.resolve("dev"),
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    {
                        loader: "ts-loader",
                        options: {
                            appendTsxSuffixTo: [/\.vue$/]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [styleLoader, "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    styleLoader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                include: /image/,
                loader: "url-loader",
                query: {
                    limit: 1,
                    name: "asset/images/[hash:16].[ext]"
                }
            },
            {
                test: /\.(ttf|woff2?|eot|svg)$/,
                include: /font/,
                loader: "url-loader",
                query: {
                    limit: 1,
                    name: "asset/fonts/[name].[hash:7].[ext]"
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            maxInitialRequests: 15,
            maxAsyncRequests: 15,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },
            }
        }
    },
    performance: {
        hints: false
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};

import { resolve } from "path";
import { VueLoaderPlugin } from "vue-loader";
import * as rspack from "@rspack/core";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import HtmlWebpackPlugin from "html-webpack-plugin";

import packageJson from "./package.json";
const deps: Record<string, string> = packageJson?.dependencies ?? {};

const myName: string = "host";

const distPath: string = resolve(__dirname, "dist");
const srcPath: string = resolve(__dirname, "src");

const entries: rspack.Entry = {};
entries[myName] = resolve(srcPath, "bootstrap.ts");

const configuration: rspack.RspackOptions = {

    context: __dirname,

    entry: entries,

    devtool: "eval-cheap-module-source-map",

    output: {

        pathinfo: false,
        path: distPath,
        publicPath: "auto",
        chunkFilename: "assets/[name]-[contenthash].bundle.js",
        filename: "assets/source-[name]-[chunkhash].js",
        sourceMapFilename: "[file].map",

    },
    performance: {

        maxAssetSize: 500000,
        maxEntrypointSize: 500000,

    },

    resolve: {

        extensions: [".ts", ".tsx", ".js", ".json", ".vue"],
        fallback: {

            "buffer": require.resolve("buffer/"),
            "crypto": require.resolve("crypto-browserify"),
            "process/browser": require.resolve("process/browser"),
            "stream": require.resolve("stream-browserify"),
            "util": require.resolve("util/"),
            "vm": require.resolve("vm-browserify"),

        },

    },

    watchOptions: {
        ignored: ["**/@mf-types/**"]
    },

    module: {

        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    experimentalInlineMatchResource: true,
                },
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            appendTsSuffixTo: [/\.vue$/],
                            configFile: resolve(__dirname, "tsconfig.json"),
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
        ],

    },

    plugins: [

        new rspack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
        }),

        new rspack.ProgressPlugin({
            profile: false,
        }),

        new VueLoaderPlugin() as rspack.RspackPluginFunction,

        new HtmlWebpackPlugin({

            filename: resolve(distPath, "index-map.html"),
            inject: false,
            template: resolve(srcPath, "index-template.html"),
            templateParameters: {
                port: 9090,
            },

        }),

        new ModuleFederationPlugin({

            name: myName,
            filename: "remote-entry.js",
            remotes: {
                "calculadoraLib": "calculadoraLib@http://localhost:9091/mf-manifest.json",
                "angularApp": "angularApp@http://localhost:9092/mf-manifest.json",
            },

            exposes: {
                ".": "./src/index",
            },

            shared: {

                lodash: {

                    singleton: false,
                    requiredVersion: deps["lodash"],

                },
            },

        }),

    ],

    devServer: {

        static: {

            directory: distPath,
            staticOptions: {
                dotfiles: "allow"
            }

        },

        setupMiddlewares: (middlewares: any, devServer: any) => {

            middlewares.push((request: any, response: any, next: any) => {

                console.log(`From ${request.ip} - ${request.method} - ${request.originalUrl}`);
                next();

            });

            return middlewares;

        },

        compress: true,
        port: 9090,
        hot: true,
        open: true,

        headers: {

            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",

        },

    },

};

export default configuration;

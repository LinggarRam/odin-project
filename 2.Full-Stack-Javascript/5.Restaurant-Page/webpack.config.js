const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    plugins: [
        new htmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],

    devServer: {
        static: "./dist",
        port: 8080,
        open: true,
    },

    mode: "development",
};
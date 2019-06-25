const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: "production",
    entry: "./src/index.js",
    devtool: false,
    plugins: [
        new HtmlWebpackPlugin({
            title: 'DEMO',
            favicon: './src/favicon.ico',
            meta: { author: "volkan", viewport: "width=device-width, initial-scale=1, shrink-to-fit=no" },
            template: "./src/index.hbs",

        }),
        new CleanWebpackPlugin(),
        new CopyPlugin([
            { from: './src/assets', to: 'assets' },
        ])

    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
    module: {

        rules: [{
            test: /\.css$/,
            use: [{ loader: "style-loader" }, { loader: "css-loader" }]
        }, {
            test: /\.hbs$/,
            use: [{ loader: "handlebars-loader" }]
        }]
    }
}
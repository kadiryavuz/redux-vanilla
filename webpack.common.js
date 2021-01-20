const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PACKAGE = require('./package.json');



module.exports = {
    entry: {
        reduxVanillaPlayer: './src/index.js',
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: 'Redux-Vanilla Player',
            template: path.join(__dirname, 'src/index.html'),
            filename: 'index.html',
            inject: true,
        }),
    ],
    output: {
        filename: `[name]_${PACKAGE.version}.bundle.js`,
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    'file-loader',
                ]
            },
            {
                test: /\.(ogg|mp3|wav)$/,
                use: [
                    'file-loader',
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ],
    },
}
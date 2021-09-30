const path = require('path');
const HtmlWebpackPligin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './project/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.[contenthash].js',
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [{
                loader: `img-optimize-loader`,
                options: {
                    compress: {
                        // This will take more time and get smaller images.
                        mode: 'high', // 'lossless', 'low'
                        disableOnDevelopment: true,
                    },
                },
            }, ],
        }, {
            test: /\.mp3$/i,
            loader: 'file-loader',
        }, {
            test: /\.mp4$/,
            loader: 'file-loader',
        }],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPligin({
            template: path.resolve(__dirname, './project/index.html')
        }),
        new MiniCssExtractPlugin(),
    ]
};
const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = Object.assign({}, base, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'docs'),
    },
    entry: {
        example: path.resolve(__dirname, `examples`, `index.tsx`),
    },
    plugins: [...base.plugins,
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        title: 'Ice Tea UI - React',
        template: path.resolve(__dirname, `examples`, `index.html`)
    })],
})

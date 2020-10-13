const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'doc'),
    },
    entry: {
        example: path.resolve(__dirname, `examples`, `index.tsx`),
    },
    plugins: [...base.plugins, new HtmlWebpackPlugin({
        title: 'Ice Tea UI - React',
        template: path.resolve(__dirname, `examples`, `index.html`)
    })],
})

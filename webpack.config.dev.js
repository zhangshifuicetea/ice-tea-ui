const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = Object.assign({}, base, {
    mode: "development",
    entry: {
        example: path.resolve(__dirname, `examples`, `index.tsx`),
    },
    plugins: [...base.plugins, new HtmlWebpackPlugin({
        title: 'Ice Tea UI - React',
        template: path.resolve(__dirname, `examples`, `index.html`)
    })],
});

const path = require('path')


const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            stylesheets: path.resolve(__dirname, 'stylesheets'),
            examples: path.resolve(__dirname, 'examples'),
            lib: path.resolve(__dirname, 'lib'),
        },
        modules: [path.resolve(__dirname, 'include'), 'node_modules']
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'iceTea',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
    ]
}

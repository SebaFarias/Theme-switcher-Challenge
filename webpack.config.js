const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { dirname } = require('path')
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname,'dist'),
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                resolve:{
                    extensions: ['.js' , '.jsx'],
                }
            }, {
                test: /.css$/,
                use: ['style-loader', 'css-loader'],
            }, {
                test: /\.(svg|png)$/,
                loader: 'url-loader',
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './images/favicon-32x32.png',
        }),
    ],
}
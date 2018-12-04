const {resolve} = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PUBLIC_PATH = '/';

module.exports = function (env) {
    return webpackMerge(commonConfig(), {
        devtool: 'cheap-module-source-map',

        output: {
            filename: '[name].build.js',
            path: resolve(__dirname, './../../dist'),
            publicPath: PUBLIC_PATH
        },

        plugins: [
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify("production")
                }
            }),
					new webpack.DefinePlugin({
						"process.env.API_KEY_GOOGLE": JSON.stringify(process.env.API_KEY_GOOGLE)
					}),
					new webpack.DefinePlugin({
						"process.env.API_KEY_FLICKR": JSON.stringify(process.env.API_KEY_FLICKR)
					}),
            new CleanWebpackPlugin(['dist', 'build'], {
                root: process.cwd(),
                verbose: true,
                dry: false
            }),
            new CopyWebpackPlugin([
                {
                    from: resolve(__dirname, './../../_redirects'),
                    to: './'
                },
                {
                    from: resolve(__dirname, './../../CNAME'),
                    to: './'
                }
            ]),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: false,
                compress: {
                    warnings: false
                },
                comments: false
            })
        ]
    })
}

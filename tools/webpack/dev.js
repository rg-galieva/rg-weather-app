const {resolve} = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./common.js');

module.exports = function (env) {
    return webpackMerge(commonConfig(), {
        output: {
            filename: '[name].build.js',
            path: resolve(__dirname, './../../dist/dev'),
            publicPath: '/assets/'
        },

        devServer: {
            historyApiFallback: true,
            compress: true,
            port: 5050,
            noInfo: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
            }
        }
    })
}
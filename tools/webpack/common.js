const {resolve} = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssSettings = require('../../src/frontend/assets/styles/vars.js');

module.exports = function () {
    return {
        context: resolve(__dirname, './../../src'),

        entry: {
            vendor: ['react', 'react-dom'],
            app: './frontend/app.js'
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/
                },


                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                            fallbackLoader: 'style-loader',
                            loader: [
                                {
                                    loader: 'css-loader',
                                    options: {
                                        modules: true,
                                        localIdentName: '[local]_[hash:base64:5]',
                                        importLoaders: 1
                                    }
                                },
                                {
                                    loader: 'postcss-loader',
                                    options: {
                                        sourceMap: 'inline',
                                        plugins: function () {
                                            return [
                                                require('postcss-import'),
                                                require('postcss-mixins'),
                                                require('postcss-cssnext')({
                                                    features: cssSettings
                                                })
                                            ]
                                        }
                                    }
                                }
                            ]
                        }
                    )
                },
                {
                    test: /\.gcss$/,
                    use: ExtractTextPlugin.extract({
                        fallbackLoader: 'style-loader',
                        loader: [
                            {
                                loader: 'css-loader'
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: 'inline',
                                    plugins: function () {
                                        return [
                                            require('postcss-import'),
                                            require('postcss-mixins'),
                                            require('postcss-cssnext')({
                                                features: cssSettings
                                            })
                                        ]
                                    }
                                }
                            }

                        ]
                    })
                },
                {
                    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                    use: 'file-loader?name=img/[name]_[hash:5].[ext]'
                }
                ,
                {
                    test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
                    use: 'url-loader?limit=100000'
                }
            ]
        },

        plugins: [
            new ExtractTextPlugin({filename: '[name].styles.css'}),
            new HtmlWebpackPlugin({
                title: 'Base React App',
                favicon: '',
                template: __dirname + '/template.html'
            })
        ]
    }
}
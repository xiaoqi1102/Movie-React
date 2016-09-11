/**
 * Created by xiaoqi on 16/8/30.
 */
var webpack = require('webpack');
var path = require('path');

/**
 * reload=true: 遇到不能hot reload的情况，整页刷新。
 * @type {string}
 */
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

/**
 * 访问内存中的 output 文件的 URL 地址.
 * @type {string}
 */
var publicPath = '/build/';

module.exports = {
    devtool: 'cheap-source-map', // 生成 map 文件,便于调试

    entry: {
        main: [hotMiddlewareScript, './app/main']
    },
    output: {
        path: path.resolve(__dirname, './server/dev/build'),
        publicPath: publicPath,
        filename: './bundle.[name].js'
    },
    //修改开发根目录
    devServer: {
        contentBase: path.resolve(__dirname, './server/dev')
    },
    resolve: {
        extensions: ['', '.js', '.css', '.less', '.json'],
        alias: {
            //'react-bootstrap': 'react-bootstrap/dist/react-bootstrap.min.js',
            'react-router': 'react-router/umd/ReactRouter.min.js'
        }
    },
    module: {
        // avoid webpack trying to shim process
        noParse: /es6-promise\.js$/,
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],
                include: path.join(__dirname, 'app')
            },
            {test: /\.json$/, loader: "json"},
            {test: /\.css$/, loader: "style?sourceMap!css"},
            {test: /\.less$/, loader: "style?sourceMap!css!less"},
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?-[a-z0-9=&.]+)?$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
            //{ test: /\.(png|jpg|gif)$/, loader: "url-loader", include: __dirname}
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                BROWSER: JSON.stringify(true)
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
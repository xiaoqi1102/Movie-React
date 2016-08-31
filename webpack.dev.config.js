/**
 * Created by xiaoqi on 16/8/30.
 */
var webpack = require('webpack');
var path = require('path');

var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var publicPath = '/build';


module.exports = {
    devtool: 'cheap-source-map',
    entry: {
        main: [hotMiddlewareScript, './app/main']
    },
    output: {
        path: path.resolve(__dirname, './server/dev/build'),
        publicPath: publicPath,
        filename: './bundle.[name].js'
    },
    devServer:{
        contentBase:path.resolve(__dirname,'./server/dev')
    },
    module:{
        noParse: /es6-promise\.js$/,
        loaders:[
            {
                test:'/\.js$/',
                exclude:/node_modules/,
                loaders:['react-hot','babel?presets[]=react,presets[]=ess2015,presets[]=stage-0'],
                include:path.join(__dirname,'app')
            }
        ]
    },
    plugins:[
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:JSON.stringify('development'),
                BROWSER:JSON.stringify(true)
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NodeEnvironmentPlugin()
    ]

};
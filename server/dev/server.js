/**
 * Created by xiaoqi on 16/8/31.
 */
import path from 'path';
import  webpack from 'webpack';
import webpackConfig from '../../webpack.dev.config'
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import Express from 'express';

const app = new Express();
const port = 5000;

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {}));

app.use(webpackHotMiddleware(compiler));

app.use(Express.static(path.join(__dirname, '/')));

app.get('*', function (request, response) {
    response.sendFile(path.join(__dirname, '/', 'index.html'))
});

app.listen(port, (error)=> {
    if (error) {
        console.error(error);
    } else {
        console.info(`==> Listening on port ${port} Open up http://localhost:${port} in your browser`)
    }
});
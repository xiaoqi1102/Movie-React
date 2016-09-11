/**
 * Created by xiaoqi on 16/9/2.
 */
if (process.env.NODE_ENV === 'development') {
    module.exports = require('./configureStore.dev');
} else {
    module.exports = require('./configureStore.prod');
}
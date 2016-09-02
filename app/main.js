/**
 * Created by xiaoqi on 16/8/30.
 */
import  React from 'react';
import ReactDom from 'react-dom';
import Home from './containers/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Router, browserHistory} from 'react-router';
import Routers from './router'
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
//import configureStore from './store/configureSotre';
//import configureStore from './store/configureSotre.dev'
//const store =configureStore();
import {store} from './store/store'

const rootDocumentElement = document.getElementById('content');
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            {Routers}
        </Router>
    </Provider>, rootDocumentElement);

if (module.hot) {
    module.hot.accept();
}
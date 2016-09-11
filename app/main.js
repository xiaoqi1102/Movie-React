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
import configureStore from './store/configureSotre';
const store =configureStore();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const rootDocumentElement = document.getElementById('content');
const history = syncHistoryWithStore(browserHistory, store);
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
ReactDom.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={history}>
                {Routers}

            </Router>
        </Provider>
    </MuiThemeProvider>, rootDocumentElement);

/*
if (module.hot) {
    module.hot.accept();
}*/

/**
 * Created by xiaoqi on 16/9/2.
 */
import  {createStore,applyMiddleware,compose} from 'redux';
import {persistState} from 'redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DebTools';

const enhancer =compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():DevTools.instrument()
);

export default function configureStore(initalState) {
    const store =createStore(rootReducer,initalState,enhancer);
    if(module.hot){
        module.hot.accept('../reducers',()=>{
            store.replaceReducer(require('../reducers').default)
        })
    };
    return store;
}
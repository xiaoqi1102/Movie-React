/**
 * Created by xiaoqi on 16/8/30.
 */
import  React from 'react';
import ReactDom from 'react-dom';
import Home from './containers/Home/Home'
const rootDocumentElement=document.getElementById('content');

ReactDom.render(<Home/>,rootDocumentElement);

if (module.hot) {
    module.hot.accept();
}
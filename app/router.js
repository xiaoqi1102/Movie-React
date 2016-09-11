/**
 * Created by xiaoqi on 16/9/2.
 */
import React from 'react';
import {Route,IndexRoute} from 'react-router'
import Movie from './containers/Movie/Movie'
import Index from './containers/Index/Index'
export  default (
    <Route path='/' component={Movie}>
        <IndexRoute component={Index}/>
        <Route path={'/index'} component={Index}/>
    </Route>
)
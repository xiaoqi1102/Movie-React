/**
 * Created by xiaoqi on 16/9/2.
 */
import  React from 'react';

class Movie extends React.Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
};

export  default  Movie;
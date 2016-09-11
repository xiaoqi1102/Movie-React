/**
 * Created by xiaoqi on 16/9/11.
 */
import React from 'react';
import createSelectedEvent from '../../utils/createSelectedEvent';

class PaginationButton extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(event) {
        if (this.props.disabled) {
            return;
        }

        if (this.props.onSelect) {
            let selectedEvent = createSelectedEvent(this.props.eventKey);
            this.props.onSelect(event, selectedEvent);
        }
    };
    render(){
        let {...others}=this.props;
        return(
            <div  onClick={this.handleClick} style={{display:'inline-block'}}>
                {this.props.children}
            </div>
        )
    }
}
export  default  PaginationButton;
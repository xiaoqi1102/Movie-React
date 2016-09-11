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
        //console.log('click');
        if (this.props.disabled) {
            return;
        }

        if (this.props.onClick) {
            console.log(this.props.eventKey);
            let selectedEvent = createSelectedEvent(this.props.eventKey);
            this.props.onClick(event, selectedEvent);
        }
    };
    render(){
        let {...others}=this.props;
        return(
            <li  onClick={this.handleClick} style={{display:'inline-block'}}>
                {this.props.children}
            </li>
        )
    }
};
PaginationButton.prototypes={
    eventKey: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    onSelect: React.PropTypes.func,
    onClick:React.PropTypes.func,
    disabled: React.PropTypes.bool,
};
export  default  PaginationButton;
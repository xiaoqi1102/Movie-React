/**
 * Created by xiaoqi on 16/9/11.
 */
import React ,{PropTypes}from 'react';
import classNames from 'classnames';
import PaginationButton from '../PaginationButton/index.js';
import elementType from 'react-prop-types/lib/elementType';
import SafeAnchor from '../SafeAnchor';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaiseButton from 'material-ui/RaisedButton'
import KeyBoardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import KeyBoardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
const style = {
    margin: 5,
    minWidth:40
};
class Pagination extends React.Component{
    constructor(props){
        super(props);
    }
    renderPageButtons(){
        let pageButtons = [];
        let startPage, endPage, hasHiddenPagesAfter;
        let {
            maxButtons,
            activePage,
            items,
            onSelect,
            ellipsis,
            buttonComponentClass
        } = this.props;
        if(maxButtons){
            let hiddenPagesBefore = activePage - parseInt(maxButtons / 2, 10);
            startPage = hiddenPagesBefore > 1 ? hiddenPagesBefore : 1;
            hasHiddenPagesAfter = startPage + maxButtons <= items;

            if (!hasHiddenPagesAfter) {
                endPage = items;
                startPage = items - maxButtons + 1;
                if (startPage < 1) {
                    startPage = 1;
                }
            } else {
                endPage = startPage + maxButtons - 1;
            }
        }else {
            startPage=1;
            endPage=items;
        }
        for (let pageNumber=startPage;pageNumber<=endPage;pageNumber++){
            pageButtons.push(
                <PaginationButton
                    key={pageNumber}
                    onClick={onSelect}
                >
                    <RaiseButton  style={style} label={pageNumber}/>
                </PaginationButton>
            )
        }
        return pageButtons;
    };
    renderFirst(){
        return(
            <PaginationButton>

            </PaginationButton>
        )
    };
    renderLast(){
        return(
            <PaginationButton>

            </PaginationButton>
        )
    };
    renderNext(){
        return(
        <PaginationButton
        key="next"
        onSelect={this.props.onSelect}
        >
            <RaiseButton style={style} icon={<KeyBoardArrowRight/>}/>
        </PaginationButton>

        )
    };
    renderPrev(){
        return(
        <PaginationButton
            key="prev"
            onClick={this.props.onSelect}>
            <RaiseButton style={style} icon={<KeyBoardArrowLeft/>}/>
        </PaginationButton>
        )
    };
    render(){
        return(
            <div >
                {this.renderPrev()}
                {this.renderPageButtons()}
                {this.renderNext()}
            </div>
        )
    }
}
Pagination.defaultProps={
    activePage: 1,
    items: 1,
    maxButtons: 0,
    first: false,
    last: false,
    prev: false,
    next: false,
    ellipsis: true,
    //buttonComponentClass: SafeAnchor,
    bsClass: 'pagination'
};
Pagination.prototypes={
    activePage: React.PropTypes.number,
    items: React.PropTypes.number,
    maxButtons: React.PropTypes.number,
    onSelect: React.PropTypes.func,
};
export  default  Pagination;
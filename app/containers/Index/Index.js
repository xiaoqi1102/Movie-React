/**
 * Created by xiaoqi on 16/9/2.
 */
import React from 'react';
import Pagination from '../../components/Pagination'
class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activePage:1
        };
        this.handleSelect=this.handleSelect.bind(this);
    }
    handleSelect(event,active){
        let {eventKey}=active;
        //console.log(eventKey);
        this.setState({
            activePage:eventKey
        })
    }
    render(){
        return(
            <div className="container">
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    items={20}
                    maxButtons={5}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect} />
            </div>
        )
    }
};
export default Index;
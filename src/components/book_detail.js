import React,{Component} from 'react';
import {connect} from 'react-redux' 
class BookDetailComponent extends Component {
    
    render(){
    // to check if the props is null
        if(this.props.book==null){
            return <div>please select a book</div>
        }else{
            return(
                <div>
                    {this.props.book.title}
                </div>
            )
        }
    
    }
}

function mapStateToProps(state){
    return {
        book:state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetailComponent);
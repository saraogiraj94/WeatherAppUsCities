import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BooksComponent extends Component {
    // This function allows us to render all books
    renderBooks() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    className="list-group-item" 
                    onClick={()=>this.props.selectBook(book)}>
                    {book.title}
                </li>
            );
        })
    }

    render() {
        console.log("Logging testing props "+this.props.asd);
        return (
            <ul className="list-group col-sm-4">
                {this.renderBooks()}
            </ul>
        );
    }
}

//The function is responsible to change the props and rerender
function mapStateToProps(state) {
    // Whatever is returned from here it shows up as props
    return {
        asd: '123',
        books: state.books
    };
}

//Anything returned from this function will serve as props to bookscontatiner
//This allows us to call this.props.selectbook

function mapDispatchToProps(dispatch){
    
    // Whenever selectBook is called dispatch the result to all the reduces
    return bindActionCreators({
        selectBook:selectBook
    },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(BooksComponent);
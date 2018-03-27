import React, { Component } from 'react';
import BooksComponent from './books';
import BookDetailComponent from './book_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BooksComponent />
        <BookDetailComponent />
      </div>
    );
  }
}

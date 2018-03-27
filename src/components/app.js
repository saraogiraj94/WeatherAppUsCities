import React, { Component } from 'react';
import BooksComponent from './books';
import BookDetailComponent from './book_detail';

import SearchBarComponent from '../containers/searchbar';

export default class App extends Component {
  render() {
    return (
      <div>
        < SearchBarComponent />
      </div>
    );
  }
}

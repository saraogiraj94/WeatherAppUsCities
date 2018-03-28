import React, { Component } from 'react';
import BooksComponent from './books';
import BookDetailComponent from './book_detail';

import SearchBarComponent from '../containers/searchbar';
import WeatherListComponent from '../containers/weatherlist';

export default class App extends Component {
  render() {
    return (
      <div>
        < SearchBarComponent />
        < WeatherListComponent />
      </div>
    );
  }
}

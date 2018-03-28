import { combineReducers } from 'redux';
import BooksReducer from './books_reducer';
import ActiveBookReducer from './select_book_reducer';
import WeatherReducer from './reducer_weather';


const rootReducer = combineReducers({
  // state: (state = {}) => state
    books:BooksReducer,
    activeBook:ActiveBookReducer ,
    weather:WeatherReducer
});

export default rootReducer;

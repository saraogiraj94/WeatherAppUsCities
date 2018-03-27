const API_KEY= "8574dc77906056cdec61d970e77e249d";

export const FETCH_WEATHER='FETCH_WEATHER';
const API_URL=`http://api.openweathermap.org/data/2.5/forecast?@appid=${API_KEY}`;

export function selectBook(book){
    //selectBook is an action creator which returns an action which consist of type and payload

    //console.log("Book has been selected"+book.title);
    return {
        type:'BOOK_SELECTED',
        payload:book
    }
}

export function fetchWeather(city){
    
    const URL=`${API_URL}&q=${city},us`;

    return {
        type:FETCH_WEATHER,
        payload:URL
    };
}
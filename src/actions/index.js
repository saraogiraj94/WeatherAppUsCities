export function selectBook(book){
    //selectBook is an action creator which returns an action which consist of type and payload

    //console.log("Book has been selected"+book.title);
    return {
        type:'BOOK_SELECTED',
        payload:book
    }
}
export default function(state=null,action){
    //reduces are only called when action  occours
    // state is not application one but the only whose state is responsible for
    // we set the default value to null as redux does not allow us to return undefined

    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
            break;
        default:
            return state;
        }
}
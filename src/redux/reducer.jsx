import {ADD_FAV, REMOVE_FAV} from './actions';

const initialState = {
    myFavorites: []
}

export default function favorites(state = initialState, {type, payload}) {
    
    switch(type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }
        
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(character => character.id !== Number(payload))
            }
        
        default:
            return {...state};
    }
}
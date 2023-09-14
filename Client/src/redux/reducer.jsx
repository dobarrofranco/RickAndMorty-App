import {ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET} from './actions';

const initialState = {
    myFavorites: [],
    allCharacters: []
}

export default function favorites(state = initialState, {type, payload}) {
    let sorted;
    
    switch(type) {
        case ADD_FAV:
            return { 
                ...state,
                myFavorites: payload, 
                allCharacters: payload 
            };
            // return {
            //     ...state,
            //     myFavorites: [...state.myFavorites, payload],
            //     allCharacters: [...state.myFavorites, payload]
            //     --> Que se vaya copiando en dos arrays al mismo tiempo. 
            // }
        
        case REMOVE_FAV:
            return { 
                ...state,
                myFavorites: payload,
                allCharacters: payload 
            };
            // return {
            //     ...state,
            //     myFavorites: state.myFavorites.filter(character => character.id !== Number(payload)),
            //     allCharacters: state.allCharacters.filter(character => character.id !== Number(payload))
            // }
        
        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter(character => character.gender === payload)
            }
        
        case ORDER: {
            if (payload === 'A') {
                sorted = state.myFavorites.sort((a, b) => a.id > b.id ? 1 : -1) 
                
                //? Si a.id es mayor que b.id, la función devuelve 1, lo que significa que a debe aparecer *después* de b en el arreglo ordenado.

                //! Si a.id es menor que b.id, la función devuelve -1, lo que significa que a debe aparecer *antes* de b en el arreglo ordenado.
            
            }else {
                sorted = state.myFavorites.sort((a, b) => b.id > a.id ? 1 : -1)
            }

            return {
                ...state,
                myFavorites: [...sorted]
            }
        }

        case RESET:
            return {
                ...state,
                myFavorites: state.allCharacters
            }

        default:
            return {...state};
    }
}
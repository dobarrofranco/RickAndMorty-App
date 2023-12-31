import axios from "axios";
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const RESET = 'RESET';

export const addFav = (character) => {
    try {
        return async (dispatch) => {
          const {data} = await axios.post('http://localhost:3001/rickandmorty/fav', character)
          
            return dispatch({
                type: 'ADD_FAV',
                payload: data,
            });
        };
        
    } catch (error) {
        alert(error.message);
    }
}

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    try {
        return async (dispatch) => {
          const {data} = await axios.delete(endpoint)
    
            return dispatch({
                type: 'REMOVE_FAV',
                payload: data,
            });
        };
        
    } catch (error) {
        alert(error.message)
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}

export const resetCards = () => {
    return {
        type: RESET
    }
}
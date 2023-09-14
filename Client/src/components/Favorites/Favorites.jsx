import { connect, useDispatch, useSelector } from "react-redux"
import Card from "../Card/Card"
import { Link } from "react-router-dom"
import { filterCards, orderCards, resetCards } from "../../redux/actions"
import { useState } from "react"
import style from './Favorites.module.css'

function Favorites({onClose, logOut}) {
    
    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

    const myFavorites = useSelector((state) => state.myFavorites)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    const handleReset = (event) => {
        dispatch(resetCards(event.target.value))
    }

    return (
            
        <div>
            
            <Link to="/home">
                    <button>Home</button>
                </Link>
                
            <Link to="/">
                <button onClick={[logOut]}>Log out</button>
            </Link>

            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value=""></option>
                <option value="Male">Hombre</option>
                <option value="Female">Mujer</option>
                <option value="Genderless">Sin género</option>
                <option value="unknown">unknown</option>
            </select>

            <button onClick={handleReset}>Todos los personajes</button>

            {myFavorites.length ?
            
            <h3 className={style.favoritos}>Tus personajes favoritos ❤️</h3>
            : <h3 className={style.noFavoritos}>No tienes personajes favoritos 💔</h3>}
            
            <div className={style.cards}>
                {myFavorites.map(element => {
                    return <Card
                    onClose={onClose}
                    key={element.id}
                    id={element.id}
                    name={element.name}
                    // status={element.status}
                    // species={element.species}
                    // gender={element.gender}
                    // origin={element.origin}
                    image={element.image}
                    />
                })}
            </div> 
            
      </div>
    )
}


// const mapStateToProps = (state) => {
//     return {
//         myFavorites: state.myFavorites,
//     }
// }

export default Favorites;
import { connect, useDispatch } from "react-redux"
import Card from "../Card/Card"
import { Link } from "react-router-dom"
import { filterCards, orderCards, resetCards } from "../../redux/actions"
import { useState } from "react"
import './Favorites.modules.css'

function Favorites({myFavorites, onClose, logOut/*, notMove*/}) {
    
    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

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
                <button onClick={[logOut/*, notMove*/]}>Log out</button>
            </Link>

            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Hombre</option>
                <option value="Female">Mujer</option>
                <option value="Genderless">Sin género</option>
                <option value="unknown">unknown</option>
            </select>

            <button onClick={handleReset}>Todos los personajes</button>

            {myFavorites.length ?
            
            <h3 className="favoritos">Tus personajes favoritos ❤️</h3>
            : null}

            {myFavorites.length ? 
            
            <div className="cards">
                {myFavorites.map(element => {
                    return <Card
                    onClose={onClose}
                    key={element.id}
                    id={element.id}
                    name={element.name}
                    status={element.status}
                    species={element.species}
                    gender={element.gender}
                    origin={element.origin}
                    image={element.image}
                    />
                })}
            </div> 
            
            : <h3 className="no-favoritos">No tienes personajes favoritos 💔</h3>}
        
      </div>
    )
}


const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps, null)(Favorites);
import { connect } from "react-redux"
import Card from "../Card/Card"
import { Link } from "react-router-dom"

function Favorites({myFavorites, onClose, logOut, notMove}) {
    return (
        <div>
            
            <Link to="/home">
                    <button>Home</button>
                </Link>
                
            <Link to="/">
                <button onClick={[logOut, notMove]}>Log out</button>
            </Link>

         {myFavorites.map(element => {
            return <Card
            onClose={onClose}
            key={element.id}
            id={element.id}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            origin={element.origin.name}
            image={element.image}
            />
         })}
      </div>
    )
}


const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps, null)(Favorites);
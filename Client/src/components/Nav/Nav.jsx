import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
// onClick={[logOut/*, notMove*/]}
function Nav({onSearch, randomize, logOut}) {
    return (
        <div>
            <SearchBar onSearch={onSearch} randomize={randomize}/>
            
            <Link to="/home">
                <button>Home</button>
            </Link>
            
            <Link to="/about">
                <button>About</button>
            </Link>

            <Link to="/">
                <button onClick={[logOut]} >Log out</button>
            </Link>

            <Link to="/favorites">
                <button>Favoritos</button>
            </Link>
                
        </div>
    )
}


export default Nav;
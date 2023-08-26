import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

function Nav({onSearch, randomize, logOut, notMove}) {
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
                <button onClick={[logOut, notMove]}>Log out</button>
            </Link>
                
        </div>
    )
}


export default Nav;
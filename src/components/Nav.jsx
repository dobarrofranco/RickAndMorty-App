import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Nav(props) {
    return (
        <div>
            <SearchBar onSearch={props.onSearch} randomize={props.randomize}/>
            
            <Link to="/home">
                <button>Home</button>
            </Link>
            
            <Link to="/about">
                <button>About</button>
            </Link>

            <Link to="/">
                <button onClick={props.logOut}>Log out</button>
            </Link>
                
        </div>
    )
}


export default Nav;
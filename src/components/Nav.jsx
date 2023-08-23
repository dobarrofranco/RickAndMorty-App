import SearchBar from "./SearchBar";

function Nav(props) {
    return (
        <div>
            <SearchBar onSearch={props.onSearch} randomize={props.randomize}/>
        </div>
    )
}


export default Nav;
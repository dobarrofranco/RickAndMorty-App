import React from "react";
import { Link } from "react-router-dom";

function PageNotFound({}) {
    return(
        <div>
            <h1>404</h1>
            <p>Esta no es la página que estabas buscando...</p>
            <br />
            <Link to="/">
                <button>Ingresar</button>
            </Link>
        </div>
    ) 
}

export default PageNotFound;
import React from "react"
import { Link } from "react-router-dom";
import './About.modules.css'

function About({logOut, notMove}) {
    return (

        <div className="contenedor">

            <div className="botones">    

                <Link to="/home">
                    <button className="home">Home</button>
                </Link>
                
                <Link to="/">
                    <button className="logout" onClick={[logOut, notMove]}>Log out</button>
                </Link>
                    
            </div>

                <div className="presentacion">
                    <img
                    src="src\components\About\img\Rick_and_Morty.svg.png" alt="Rick and Morty - About" />
                    <h5>🙌 Aplicación de Rick & Morty de Franco Dobarro, bienvenid@! 🙌</h5>
                </div>

        </div>
    
    )
}

export default About;
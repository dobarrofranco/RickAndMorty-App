import React, { useState } from "react";
import { validaciones } from "../validations";

function Form({ login }) {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    // Crea una función llamada handleChange que nos permita reflejar el texto ingresado de los inputs en nuestro estado local.
    function handleChange(event) {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });

        setErrors(validaciones({...userData, [event.target.name]:event.target.value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault() // prevenir el comportamiento por defecto del evento submit
        login(userData);
    }

    return (
        
        <form>
            <div>
                <label>Email</label>
                <br />
                <input type="text" name="email" value={userData.email}  placeholder="Su e-mail" onChange={handleChange}/>
                <p>{errors.email}</p>
                <br />
                <label>Contraseña</label>
                <br />
                <input type="password" name="password" value={userData.password} placeholder="Su contraseña" onChange={handleChange}/>
                <p>{errors.password}</p>
                <br />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </form> 
        
    )
}

export default Form;
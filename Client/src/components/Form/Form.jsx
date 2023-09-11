import React, { useState } from "react";
import { validaciones } from "../../validations";
import style from './Form.module.css'

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

        setErrors(validaciones({
            ...userData,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault() // prevenir el comportamiento por defecto del evento submit
        login(userData);
    }

    function disableHandler() {
        let disabled;

        if (errors.email || errors.password) {
            disabled = true;
        } else {
            disabled = false;
        }
        return disabled;
    }

    return (

        <div className={style.backForm}>

            <div className={style.boxForm}></div>

            <div className={style.form}>

                <form onSubmit={handleSubmit}>

                    <p>Email</p>
                    <div >
                        <input type="text" name="email" value={userData.email} placeholder="Su e-mail" onChange={handleChange} className={style.inputStyle} />
                    </div>
                    <p>{errors.email}</p>

                    <br />

                    <p>Contraseña</p>

                    <div >
                        <input type="password" name="password" value={userData.password} placeholder="Su contraseña" onChange={handleChange} className={style.inputStyle} />
                    </div>
                    <p>{errors.password}</p>
                    <br />

                    <button className={style.submitStyle} disabled={disableHandler()} >Submit</button>

                </form>

            </div>

        </div>
    )
}

export default Form;
import {useState} from "react";
import {validar} from "../helpers";

function Login() {
  const [input, setInput] = useState({
    email: "", // gama@gmail.com
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "ingresa un email", // gama@gmail.com
    password: "ingresa un password", //"La contrasena debe tener al menos 6 caracteres"
  });

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

    setErrors(validar({...input, [event.target.name]: event.target.value}));
  }

  function sumbitHandler(event) {
    // envio input a la DB
    event.preventDefault();
    alert("Bienvenido coleguilla");
  }

  return (
    <div>
      <form onSubmit={sumbitHandler}>
        <label>EMAIL</label>
        <input
          placeholder="email"
          name="email"
          // value={input.email}
          onChange={handleChange}
          type="text"
        />
        <span>{errors.email}</span>
        <label>PASSWORD</label>
        <input
          placeholder="contrasena"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <span>{errors.password}</span>
        {errors.email || errors.password ? null : (
          <button type="submit">INGRESAR</button>
        )}
      </form>
    </div>
  );
}

export default Login;

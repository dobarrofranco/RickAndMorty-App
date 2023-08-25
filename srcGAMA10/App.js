import Home from "./views/Home";
import Detail from "./views/Detail";

import {Routes, Route, useLocation} from "react-router-dom";

import "./App.css";
import About from "./views/About";
import Login from "./views/Login";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <h1>Mi app de Harry Potaaah ⚡</h1>

      {location.pathname === "/about" ? console.log("Estas en el about") : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />}>
          {/* <Route path="/bartolomiau" /> * localhos:3000/about/bartolomiau */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

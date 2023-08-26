import {useState} from "react";

export default function SearchBar({onSearch, randomize}) {
   
   const [id, setId] = useState("");

   function changeHandler(event) {
      setId(event.target.value)
   }

   return (
      <div>
         <input type='search' onChange={changeHandler} value={id}/>
         <button onClick={() => {onSearch(id);setId("")}}>Agregar</button>
         <button onClick={randomize}>Random</button>
      </div>
   );
}

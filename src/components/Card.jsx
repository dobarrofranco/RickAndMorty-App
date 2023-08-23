import React from "react";

export default function Card({name, status, species, gender, origin, image, onClose, id}) {
   return (
      <div>
         <button onClick={()=>{onClose(id)}}>X</button>
         <h2>Nombre: {name}</h2>
         <h2>Estado: {status}</h2>
         <h2>Especie: {species}</h2>
         <h2>Género: {gender}</h2>
         <h2>Origen: {origin}</h2>
         <img src={image} alt={name}/>
      </div>
   );
}

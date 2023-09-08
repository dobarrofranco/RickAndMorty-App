import React from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

function Detail() {
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
           
        });
        return setCharacter({});
    }, [id]);


    return (
        <div>
            {character.name ? (
                <> 
                <h1>{character.name}</h1>
                <h4>Estado: {character.status}</h4>
                <h4>Género: {character.gender}</h4>
                <h4>Especie: {character.species}</h4>
                <h4>Origen: {character.origin?.name}</h4>
                <img src={character.image} alt={character.name} />
                </>

            ) : (
                <h3>No existe ese personaje</h3>
            )}
        </div>
    )
}

export default Detail
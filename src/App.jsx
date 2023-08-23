import { useState } from 'react';
import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import axios from "axios";

function App() {
   const [characters, setCharacters] = useState([]);


   // https://rym2-production.up.railway.app/api/character/${id}?key=henrym-dobarrofranco

   function onSearch(id) {
      if (characters.find(char => char.id === Number(id))) {
         alert('Ya existe!!')
         return
      }else{
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
      })
      }  
   }

   function closeHandler(id) {
      let filteredCharacters = characters.filter(
         (character) => character.id !== Number(id)
      );

      setCharacters(filteredCharacters);
   }


   function randomHandler() {
      
      let randomId = (Math.random() * 826).toFixed();

      randomId = parseInt(randomId);

      if (!characters.includes(randomId)) {
         onSearch(randomId);

      }else{
         alert ('ese personaje ya fue agregado')
         return
      }

   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} randomize={randomHandler}></Nav> 
         <Cards characters={characters} onClose={closeHandler}/>
      </div>
   );
}

export default App;

import './App.css';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate, Route, Routes, useLocation } from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Form from './components/Form/Form';
import axios from "axios";

function App() {
   const [characters, setCharacters] = useState([]);
   
   const location = useLocation();

   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
   const EMAIL = 'mr.francodobarro@gmail.com'
   const PASSWORD = 'pass123'


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

   function login(userData) {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      }else{
         alert('credenciales incorrectas')
         return;
      }
   }

   function logOut() {
      setAccess(false);
   }

   function notMove() {
      if (location.pathname === '/' && setAccess(false)) {
         navigate('/')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         
         {location.pathname !== '/' ? <Nav onSearch={onSearch} randomize={randomHandler} logOut={logOut} notMove={notMove}></Nav> : null} 

         <Routes>

            <Route 
            path='/home' 
            element={<Cards characters={characters} onClose={closeHandler}/>} 
            />

            <Route
            path='/about'
            element={<About />}
            />

            <Route
            path='/detail/:id'
            element={<Detail />}
            />

            <Route
            
            />

            <Route
            path='/'
            element={<Form login={login}/>}
            />

            <Route
            path='/404'
            element={<PageNotFound />}
            />
            
            <Route
            path='*'
            element={<Navigate to='/404'/>}
            />

         </Routes>
      </div>
   );
}

export default App;

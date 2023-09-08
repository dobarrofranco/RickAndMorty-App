import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import style from './Card.modules.css'

function Card({name, status, species, gender, origin, image, onClose, id, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false);
   const [closeBtn, setCloseBtn] = useState(true);

   useEffect(()=>{
      if (!onClose) {
         setCloseBtn(false)
      }
   },[])

   function handleFavorite() {
      if (isFav) {
         setIsFav(false)
         removeFav(id)
      }else{
         setIsFav(true)
         addFav({name, status, species, gender, origin, image, onClose, id, addFav, removeFav, myFavorites})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div>

         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }

         {closeBtn && <button onClick={()=>{onClose(id)}}>X</button>}
         

         <NavLink to={`/detail/${id}`}>
            <h2 className={style.name}>{name}</h2>
         </NavLink>
         
            {/* <h2>Estado: {status}</h2> */}
            <h2 className="pj-detail">Especie: {species}</h2>
            <h2 className="pj-detail">Género: {gender}</h2>
            {/* <h2>Origen: {origin}</h2> */}
            <img src={image} alt={name}/>
         
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)) // ! Mejora las actions para que se puedan despachar
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
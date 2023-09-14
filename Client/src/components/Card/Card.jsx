import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import style from './Card.module.css'

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

   const RotateCard = () => {
      
   }

   return (
      <div>


         {
            isFav ? (
               <button className={style.favButton} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={style.favButton} onClick={handleFavorite}>🤍</button>
            )
         }

         {closeBtn && <button className={style.closeButton} onClick={()=>{onClose(id)}}>X</button>}
         
         <div className={style.cardBox}>

            <NavLink to={`/detail/${id}`}><h2 className={style.nameCard}>{name}</h2></NavLink>
         
            {/* <h2>Estado: {status}</h2> */}
            {/* <h2 className="pj-detail">Especie: {species}</h2> */}
            {/* <h2 className="pj-detail">Género: {gender}</h2> */}
            {/* <h2>Origen: {origin}</h2> */}
            <img className={style.imgCard} src={image} alt={name}/>

         </div>
         
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
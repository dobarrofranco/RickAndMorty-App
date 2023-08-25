import {useNavigate} from "react-router-dom";

function Card({character, clickHandler}) {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate(`detail/${character.id}`);
  }

  // <Link to={`detail/${character.id}`}/>
  return (
    <div>
      <h1>Nombre: {character.name}</h1>
      <h2>Casa: {character.house}</h2>

      <button onClick={navigateHandler}>Haz Click!</button>
    </div>
  );
}

export default Card;

import Card from "./Card";

function CardList({props, clickHandler}) {
  //[personajes]

  return (
    <div>
      {props.map((character) => (
        <Card
          key={character.id}
          character={character}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  );
}

export default CardList;

import CardList from "../components/CardList";
import Nav from "../components/Nav";
import {useState, useEffect} from "react";

function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters([
      {id: 1, name: "Harry Potter", house: "Griffindor"},
      {id: 2, name: "Ron Weasley", house: "Griffindor"},
      {id: 3, name: "Draco Malfoy", house: "Slytherin"},
      {id: 4, name: "Hermione Granger", house: "Griffindor"},
    ]);
  }, []);

  return (
    <div>
      <Nav />
      <CardList props={characters} />
    </div>
  );
}

export default Home;

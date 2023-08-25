import {useParams} from "react-router-dom";

function Detail() {
  const {id} = useParams();
  return (
    <div>
      <h1>El id es: {id}</h1>
    </div>
  );
}

export default Detail;

import { Link } from "react-router-dom";

function Blague(props) {
  return (
    <div className="padding-left">
      <h4>Blague n° {props.index + 1}</h4>
      <div>Blague : {props.blague}</div>
      <div>Réponse : {props.reponse}</div>
      <br />
      <Link
        to="/blague"
        state={{
          index: props.index,
          blague: props.blague,
          reponse: props.reponse,
        }}
      >
        Voir plus
      </Link>
    </div>
  );
}

export default Blague;

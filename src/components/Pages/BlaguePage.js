import { useState } from "react";
import { useLocation } from "react-router-dom";

function BlaguePage() {
  const location = useLocation();
  const [likes, setLikes] = useState(0);

  return (
    <div className="padding-left padding-top">
      <h4>Blague n° {location.state.index + 1}</h4>
      <div>Blague : {location.state.blague}</div>
      <div>Réponse : {location.state.reponse}</div>
      <br />
      <button
        onClick={() => {
          setLikes(likes + 1);
        }}
      >
        J'aime
      </button>
      &nbsp;
      <button
        onClick={() => {
          setLikes(likes - 1);
        }}
      >
        J'aime pas
      </button>
      <br />
      <div>popularité : {likes} j'aime(s)</div>
    </div>
  );
}

export default BlaguePage;

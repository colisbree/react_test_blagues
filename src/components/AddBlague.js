import { useState } from "react";

function AddBlague(props) {
  const [blague, setBlague] = useState("");
  const [reponse, setReponse] = useState("");

  function handleChange(event) {
    if (event.target.name === "blague") {
      setBlague(event.target.value);
    } else if (event.target.name === "reponse") {
      setReponse(event.target.value);
    } else {
      //do nothing
    }
  }

  function handleCreate() {
    props.updateState({ blague: blague, reponse: reponse });
    setBlague("");
    setReponse("");
  }

  return (
    <div className="padding-left">
      <div>
        <label>Blague :</label>
        <input
          type="text"
          placeholder="Blague"
          onChange={handleChange}
          name="blague"
          value={blague}
        />
      </div>
      <div>
        <label>Réponse :</label>
        <input
          type="text"
          placeholder="Réponse"
          onChange={handleChange}
          name="reponse"
          value={reponse}
        />
      </div>

      <button onClick={handleCreate}>Ajouter la blague</button>
      <br />
      {blague}
      <br />
      {reponse}
    </div>
  );
}

export default AddBlague;

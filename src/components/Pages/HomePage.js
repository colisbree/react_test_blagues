import Title from "../Title";
import Blague from "../Blague";
import AddBlague from "../AddBlague";
import { useState } from "react";

const init_blagues = [
  {
    blague: "Qu'est-ce qui est jaune et qui attend ?",
    reponse: "Jonathan",
  },
  {
    blague:
      "Qu'est-ce qui est grand vert et qui fait mal quand on se le prend dans l'oeil ?",
    reponse: "Un terrain de foot",
  },
  {
    blague: "titre blague",
    reponse: "reponse",
  },
];

function HomePage() {
  const text = "Hello World ! ";
  const [blagues, setBlagues] = useState(init_blagues);

  function updateState(blague) {
    setBlagues((oldBlagues) => [...oldBlagues, blague]);
  }

  return (
    <div>
      <Title />
      <AddBlague updateState={updateState} />
      <div className="padding-top">
        {blagues.map((element, index) => {
          return (
            <Blague
              index={index}
              blague={blagues[index].blague}
              reponse={blagues[index].reponse}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;

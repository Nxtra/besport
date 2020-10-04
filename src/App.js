import React, { useState } from "react";
import "./App.scss";
import sportMoments from "./data/sportMomentsData";
import Moment from "./components/moment";
import SocialFollow from "./components/socialFollow";

function App() {
  const [chosen, setChosen] = useState();

  const handleClick = (i) => {
    setChosen(i);
  };

  return (
    <div className="App">
      <header className="header">
        Ken jij de belgische sportgeschiedenis van het 2de decennium ?!
      </header>
      <div className="toolbar"></div>

      <div className="soundboard">
        {sportMoments.map((moment, index) => (
          <Moment
            image={moment.image}
            sound={moment.sound}
            key={index}
            active={index === chosen}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      <footer>
        <SocialFollow />
      </footer>
    </div>
  );
}

export default App;

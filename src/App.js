import React from "react";
import "./App.scss";
import SoundBoard from "./components/soundboard";
import sportMoments from "./data/sportMomentsData";
import SocialFollow from "./components/socialFollow";

function App() {
  return (
    <div className="App">
      <header className="header">
        Ken jij de belgische sportgeschiedenis van het 2de decennium ?!
      </header>
      <div className="toolbar"></div>

      <SoundBoard data={sportMoments} />

      <footer>
        <SocialFollow />
      </footer>
    </div>
  );
}

export default App;

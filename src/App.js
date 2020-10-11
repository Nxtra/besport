import React, { useState } from "react";

import "./App.scss";
import SoundBoard from "./components/soundboard";
import sportMoments from "./data/sportMomentsData";
import SocialFollow from "./components/socialFollow";
import Toolbar from "./components/Toolbar";

function App() {
  const [data, setData] = useState(sportMoments);

  const filterOnCategory = (category) => {
    const filteredItems = category
      ? sportMoments.filter((sportMoment) => sportMoment.category === category)
      : sportMoments;
    setData(filteredItems);
  };

  return (
    <div className="App">
      <header className="header">
        Ken jij de belgische sportgeschiedenis van het 2de decennium ?!
      </header>

      <Toolbar
        onSelect={filterOnCategory}
        categories={sportMoments.map((sportMoment) => sportMoment.category)}
      />

      <SoundBoard data={data} />

      <footer>
        <SocialFollow />
      </footer>
    </div>
  );
}

export default App;

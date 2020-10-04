import React, { useState, useEffect } from "react";

import Moment from "./moment";

function Soundboard(props) {
  const [data] = useState(props.data);
  const [chosen, setChosen] = useState(-1);

  const [audio, setAudio] = useState();

  const handleItemClick = (i) => {
    setChosen(i);
  };

  // Heb ik hier echt twee useEffect's voor nodig?
  useEffect(() => {
    if (chosen >= 0) {
      setAudio(new Audio(data[chosen].sound));
    }
  }, [chosen]);

  useEffect(() => {
    if (audio) {
      audio.play();
      audio.addEventListener("ended", () => {
        setChosen(-1);
      });
      return function cleanup() {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [audio]);

  return (
    <div className="soundboard">
      {data.map((moment, index) => (
        <Moment
          image={moment.image}
          key={index}
          active={index === chosen}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}

export default Soundboard;

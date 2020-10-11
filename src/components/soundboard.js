import React, { useState, useEffect } from "react";

import Moment from "./moment";

function Soundboard(props) {
  const [audio, setAudio] = useState();

  const handleItemClick = (i) => {
    if (props.chosen === i) {
      if (!audio.paused) {
        audio.pause();
      } else if (audio.paused) {
        audio.play();
      }
    }
    props.setChosen(i);
  };

  // Heb ik hier echt twee useEffect's voor nodig?
  useEffect(() => {
    if (props.chosen >= 0) {
      setAudio(new Audio(props.data[props.chosen].sound));
    }
  }, [props.chosen]);

  useEffect(() => {
    if (audio) {
      audio.play();
      audio.addEventListener("ended", () => {
        props.setChosen(-1);
      });
      return function cleanup() {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [audio]);

  return (
    <div className="soundboard">
      {props.data.map((moment, index) => (
        <Moment
          image={moment.image}
          name={moment.name}
          key={index}
          active={index === props.chosen}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}

export default Soundboard;

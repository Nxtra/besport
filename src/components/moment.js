import React from "react";
import "./moment.scss";

class Moment extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active: this.props.active,
    };
  }

  audio = new Audio(this.props.sound);

  togglePlay = () => {
    this.setState({ active: !this.state.active }, () => {
      this.state.active ? this.audio.play() : this.audio.pause();
    });
  };

  handleClick = () => {
    this.togglePlay();
  };

  componentDidMount() {
    this.audio.addEventListener("ended", () => {
      this.setState({ active: false });
    });
  }

  componentWillUnmount() {
    this.audio.removeEventListener("ended", () =>
      this.setState({ active: false })
    );
  }

  render() {
    return (
      <div className="item">
        <img
          className={`${this.state.active ? "gray" : "notGray"}`}
          src={this.props.image}
          alt="not found"
        ></img>
      </div>
    );
  }
}

export default Moment;

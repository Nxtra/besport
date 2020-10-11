import React from "react";
import "./moment.scss";

class Moment extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hovered: false,
    };
  }

  handleChange = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div
        className="item"
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onClick={this.handleChange}
      >
        <div className={this.state.hovered ? `name hovered` : "name"}>
          {this.props.name}
        </div>
        <img
          className={`${this.props.active ? "gray" : "notGray"}`}
          src={this.props.image}
          alt="not found"
        ></img>
      </div>
    );
  }
}

export default Moment;

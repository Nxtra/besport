import React from "react";
import "./moment.scss";

class Moment extends React.Component {
  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onClick();
  }

  render() {
    return (
      <div className="item">
        <img
          className={`${this.props.active ? "gray" : "notGray"}`}
          src={this.props.image}
          alt="not found"
          onClick={this.handleChange}
        ></img>
      </div>
    );
  }
}

export default Moment;

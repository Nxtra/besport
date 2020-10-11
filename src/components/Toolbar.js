import React from "react";

class Toolbar extends React.Component {
  constructor(props) {
    super();
    this.categories = props.categories;
  }

  onSelected = ({ target }) => {
    this.props.onSelect(target.value);
  };

  render() {
    return (
      <div className="toolbar">
        <select onChange={this.onSelected}>
          <option defaultValue value="">
            No filter
          </option>
          {this.categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Toolbar;

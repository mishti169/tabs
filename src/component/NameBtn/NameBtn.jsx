import React, { Component } from "react";

class NameBtn extends Component {
  render() {
    const { currItem } = this.props;
    return (
      <button onClick={() => this.props.getData(currItem.id)}>
        {currItem.name}
      </button>
    );
  }
}

export default NameBtn;

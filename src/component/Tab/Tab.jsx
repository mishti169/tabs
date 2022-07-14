import React, { Component } from "react";

class Tab extends Component {
  render() {
    if (!this.props.desc) {
      return null;
    }
    return (
      <div>
        <h2>{this.props.position}</h2>
        <h3>{this.props.name}</h3>
        <h4>{this.props.exp}</h4>
        <div>
          <span> &gt;&gt;</span>
          <span>{this.props.desc}</span>
        </div>
      </div>
    );
  }
}
export default Tab;

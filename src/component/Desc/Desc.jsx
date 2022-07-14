import React, { Component } from "react";
import NameBtn from "../NameBtn/NameBtn";
import Tab from "../Tab/Tab";
import "./Desc.css";

class Desc extends Component {
  state = {
    userData: this.props.data[0], // {}
  };
  getData = (id) => {
    let ans = this.props.getUserData(id); //{}
    this.setState({ userData: ans });
  };
  render() {
    return (
      <div className="desc">
        <div className="desc-btn">
          {this.props.data.map((currItem) => {
            return (
              <NameBtn
                getData={this.getData}
                key={currItem.id}
                currItem={currItem}
              />
            );
          })}
        </div>
        <div>
          <Tab {...this.state.userData} />
        </div>
      </div>
    );
  }
}
export default Desc;

import React, { Component } from "react";
import Desc from "./component/Desc/Desc";

let apiData = [
  {
    id: 1,
    name: "Tommy",
    position: "Full Stack Web Developer",
    exp: "December 2015 - Present",
    desc: "Butcher drinking vinegar  authentic messenger bag copper mug food truck taxidermy.  echo park  iPhone  single-origin coffee cloud bread tilde vegan .",
  },
  {
    id: 2,
    name: "Bigdrop ",
    position: "Front-End Engineer",
    exp: "May 2015 - December 2015",
    desc: "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
  },
  {
    id: 3,
    name: "Cuker",
    position: "Engineering Intern",
    exp: "May 2014 - September 2015",
    desc: "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism.",
  },
];

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: apiData });
    }, 3000);
  }
  getUserData = (id) => {
    let finalData = this.state.data.filter((currItem) => {
      return currItem.id === id;
    }); // [{}] // arr[0] -> return {}
    return finalData[0]; //{}
  };
  render() {
    return (
      <div className="app">
        <h2>Experience</h2>
        {this.state.data.length === 0 && <div>Loading...</div>}
        {this.state.data.length !== 0 && (
          <Desc data={this.state.data} getUserData={this.getUserData} />
        )}
        <button>More Info</button>
      </div>
    );
  }
}

export default App;

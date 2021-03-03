import React from "react";

class App extends React.Component {
  state = {
    list: ["To do 1", "To do 2", "To do 3"],
  };

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     list:[],
  //   }
  // }

  render() {
    console.log(this.state);
    return (
      <div>
        <input type="text" />
        <button>ADD</button>
        <ul>
          {this.state.list.map((item) => (
            <li>
              {item}
              <button>EDIT</button>
              <button>DEL</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

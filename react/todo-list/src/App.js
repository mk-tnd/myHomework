/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

class App extends React.Component {
  state = {
    list: [
      { task: "To do 1", status: true },
      { task: "To do 2", status: false },
      { task: "To do 3", status: true },
    ],
    text: "",
  };

  handleValue = (e) => {
    this.setState({ text: e.target.value });
    console.log(e.target.value);
  };

  handleAdd = () => {};

  handleEdit = () => {};

  handleDelete = () => {};

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
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleValue}
        />
        <button>ADD</button>
        <ul>
          {this.state.list.map((item) => (
            <li>
              <span
                style={{
                  marginRight: "20px",
                  textDecoration: item.status ? "line-through" : "none",
                }}
              >
                {item.task}
              </span>

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

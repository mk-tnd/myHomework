/** @jsxImportSource @emotion/react */
import React from "react";

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

  handleAdd = () => {
    this.setState({
      list: [...this.state.list, { task: this.state.text, status: false }],
      text: "",
    });
  };

  handleEdit = (indexToEdit) => {
    const textEdit = prompt("Enter task");
    const newList = [...this.state.list];
    newList[indexToEdit].task = textEdit;
    this.setState({
      list: newList,
    });
  };

  handleToggleStatus = (indexToToggle) => {
    const newList = [...this.state.list];
    newList[indexToToggle].status = !newList[indexToToggle].status;
    this.setState({
      list: newList,
    });
  };

  handleDelete = (indexToDelete) => {
    this.setState({
      list: [...this.state.list].filter(
        (item, index) => index !== indexToDelete
      ),
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleValue}
        />
        <button onClick={this.handleAdd}>ADD</button>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>
              <span
                onClick={() => this.handleToggleStatus(index)}
                style={{
                  marginRight: "20px",
                  textDecoration: item.status ? "line-through" : "none",
                }}
              >
                {item.task}
              </span>
              <button onClick={() => this.handleEdit(index)}>EDIT</button>
              <button onClick={() => this.handleDelete(index)}>DEL</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

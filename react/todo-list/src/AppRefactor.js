/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Header from "./componant/Header";
import Container from "./componant/Container";

function AppRefactor() {
  let id = 0;
  const [list, setList] = useState([
    {
      id: 888,
      task: "to do 1",
      status: "todo",
    },
    {
      id: 8662,
      task: "to do 2",
      status: "doing",
    },
    {
      id: 5821562,
      task: "to do 3",
      status: "done",
    },
  ]);

  return (
    <div>
      <Header list={list} id={id} setList={setList} />
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="card">
              <div className="card-header">To Do</div>
              <Container list={list} setList={setList} status="todo" />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card">
              <div className="card-header">Doing</div>
              <Container list={list} setList={setList} status="doing" />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card">
              <div className="card-header">Done</div>
              <Container list={list} setList={setList} status="done" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppRefactor;

/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Header from "./componant/Header";
import Container from "./componant/Container";
import { PlusCircleFill } from "react-bootstrap-icons";
import { Backspace } from "react-bootstrap-icons";
import AddPage from "./componant/AddPage";

function AppRefactor() {
  const [id, setId] = useState(0);
  const [toAdd, setToAdd] = useState(false);
  const [list, setList] = useState([
    {
      id: 888,
      task: "to do 1",
      date: "2021-12-12",
      status: "todo",
    },
    {
      id: 8662,
      task: "to do 2",
      date: "2021-11-11",
      status: "doing",
    },
    {
      id: 5821562,
      task: "to do 3",
      date: "2021-11-12",
      status: "done",
    },
  ]);

  return (
    <div>
      <Header list={list} id={id} toAdd={toAdd} setList={setList} />
      {toAdd ? (
        <div className="container-fluid">
          <div className="mt-3 ml-4">
            <button
              onClick={() => setToAdd(!toAdd)}
              className="btn btn-outline-dark"
            >
              <Backspace size={30}></Backspace> Back
            </button>
          </div>
          <div className="row justify-content-center">
            <AddPage
              id={id}
              setId={setId}
              list={list}
              setList={setList}
              toAdd={toAdd}
              setToAdd={setToAdd}
            />
          </div>
        </div>
      ) : (
        <div className="container-fluid mt-4">
          <div className="d-flex justify-content-center my-4">
            <button
              onClick={() => setToAdd(!toAdd)}
              className="btn btn-outline btn-success m-2 my-sm-0"
              type="submit"
            >
              <PlusCircleFill size={20}></PlusCircleFill> Add New List
            </button>
          </div>
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
      )}
    </div>
  );
}

export default AppRefactor;

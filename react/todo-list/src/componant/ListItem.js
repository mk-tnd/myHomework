/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Trash } from "react-bootstrap-icons";
import { PencilSquare } from "react-bootstrap-icons";
import { useState } from "react";

function ListItem(props) {
  const [toExpire, setToExpire] = useState(false);
  const [text, setText] = useState("");
  const [edit, setToEdit] = useState(true);
  const [times, setTimes] = useState("");
  const [left, setLeft] = useState("");
  const { id, task, date, status } = props.item;

  function handleDelete(idToDelete) {
    props.setList(props.list.filter((val) => val.id !== idToDelete));
  }

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  function handleEdit(idToEdit) {
    let textToEdit = text;
    if (textToEdit && textToEdit !== "")
      props.setList(
        props.list.map((val) =>
          idToEdit === val.id ? { ...val, task: textToEdit } : val
        )
      );
    setToEdit(!edit);
  }

  function handleToDoing(idToDoing) {
    props.setList(
      props.list.map((val) =>
        idToDoing === val.id ? { ...val, status: "doing" } : val
      )
    );
  }

  function handleToDone(idToDone) {
    props.setList(
      props.list.map((val) =>
        idToDone === val.id ? { ...val, status: "done" } : val
      )
    );
  }

  function toCountDown() {
    const expDate = new Date(date).getTime();
    setInterval(() => {
      let nowDate = new Date().getTime();
      let timeLeft = expDate - nowDate;
      let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      if (timeLeft <= 0) {
        setLeft(true);
        setTimes("Expires!!");
      } else {
        setTimes(`${days} Days ${hours} Hours ${minutes} Min ${seconds} Secs`);
      }
    }, 1000);
  }

  toCountDown();

  return (
    <div
      css={css`
        color: #ffffff;
        border: 2px solid white;
      `}
      style={{
        background:
          status === "doing"
            ? "#ffc107"
            : status === "done"
            ? "#28a745"
            : left <= 0
            ? "grey"
            : "pink",
      }}
      className="card-body d-flex flex-column"
    >
      <div>
        {edit ? (
          <div
            css={css`
              height: 60px;
            `}
          >
            <p
              className="card-text"
              style={{
                marginRight: "20px",
                marginBottom: "0",
              }}
            >
              {task}
            </p>
          </div>
        ) : (
          <div
            css={css`
              height: 60px;
            `}
          >
            <input
              css={css`
                width: 60%;
                border-radius: 4px;
                border: none;
                margin: 0;
                padding: 0.375rem 0.75rem; ;
              `}
              className="m-1"
              value={text}
              type="text"
              onChange={handleTextChange}
            />
            <button onClick={() => handleEdit(id)} className="btn btn-light">
              Submit
            </button>
          </div>
        )}
        <p
          css={css`
            cursor: pointer;
          `}
          onClick={() => setToExpire(!toExpire)}
        >
          {toExpire ? times : date}
        </p>
      </div>
      <div className="d-flex justify-content-end">
        <div
          className="d-inline bg-light"
          css={css`
            border-radius: 5px;
          `}
        >
          <button
            className="btn btn-sm m-1"
            css={css`
              border: 1px solid blue;
            `}
            onClick={() => setToEdit(!edit)}
          >
            <PencilSquare color="blue" />
          </button>
          <button
            css={css`
              border: 1px solid red;
            `}
            className="btn btn-sm m-1"
            onClick={() => handleDelete(id)}
          >
            <Trash color="red" />
          </button>
          <button
            className="btn btn-sm btn-outline-warning m-1"
            onClick={() => handleToDoing(id)}
          >
            Doing
          </button>
          <button
            className="btn btn-sm btn-outline-success m-1"
            onClick={() => handleToDone(id)}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListItem;

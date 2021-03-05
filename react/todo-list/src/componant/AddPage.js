/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

function AddPage(props) {
  const [textList, setTextList] = useState("");
  const [textDeadline, setTextDeadline] = useState("");

  const handleListChange = (e) => {
    setTextList(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setTextDeadline(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    props.setId(props.id + 1);
    props.setList([
      ...props.list,
      { id: props.id, task: textList, date: textDeadline, status: "todo" },
    ]);
    console.log(props.id);
    props.setToAdd(!props.toAdd);
    setTextList("");
    setTextDeadline("");
  };

  return (
    <div className="d-flex flex-column">
      <div
        className="d-flex align-items-center"
        css={css`
          height: 40vh;
        `}
      >
        <form onSubmit={handleSubmitForm}>
          <div>
            <label style={{ width: 80 }} htmlFor="list">
              New List
            </label>
            <input
              value={textList}
              onChange={handleListChange}
              id="list"
              type="text"
            />
          </div>
          <div>
            <label style={{ width: 80 }} htmlFor="deadline">
              Dead Line
            </label>
            <input
              value={textDeadline}
              onChange={handleDeadlineChange}
              id="deadline"
              type="date"
            />
          </div>
          <button
            className="d-flex mx-auto btn btn-outline-dark mt-4"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPage;

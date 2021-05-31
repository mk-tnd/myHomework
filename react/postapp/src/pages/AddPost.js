/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Button from "../component/Button";

function AddPost(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  async function createPost() {
    let response = await fetch("http://localhost:8000/posts/", {
      method: "POST",
      body: JSON.stringify({ title: title, content: description }),
      headers: {
        "content-type": "application/json",
      },
    });

    if (response.ok) {
      props.setToAdd(!props.toAdd);
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    createPost();
  }

  return (
    <div
      css={css`
        width: 700px;
        margin: 0 auto;
      `}
    >
      <div>
        <h1>Post App</h1>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <label
            htmlFor="title"
            css={css`
              font-size: 24px;
              margin: 15px 0;
            `}
          >
            Title
          </label>
          <input
            css={css`
              outline: none;
              padding: 10px;
              font-size: 20px;
            `}
            type="text"
            onChange={handleTitleChange}
            id="title"
          />

          <label
            htmlFor="Description"
            css={css`
              font-size: 24px;
              margin: 15px 0;
            `}
          >
            Description
          </label>
          <textarea
            css={css`
              border-radius: 10px;
              outline: none;
              padding: 10px;
              font-size: 18px;
            `}
            name="Description"
            onChange={handleDescriptionChange}
            id="Description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div
          css={css`
            text-align: center;
            margin-top: 15px;
          `}
        >
          <Button type="submit" primary={true}>
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;

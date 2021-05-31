/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Postbox from "../postbox";
import Button from "../component/Button";
import { useState } from "react";
import AddPost from "./AddPost";

function HomePage() {
  const [toAdd, setToAdd] = useState(true);
  return (
    <div>
      <div className="postapp-header">
        <h1
          css={css`
            color: #ffffff;
            font-weight: 500;
          `}
        >
          Post App
        </h1>
        {/* <button className="add-post button">Add post</button> */}
        <Button primary={false} onClick={() => setToAdd(!toAdd)}>
          Add post
        </Button>
      </div>
      {toAdd ? <Postbox /> : <AddPost toAdd={toAdd} setToAdd={setToAdd} />}
    </div>
  );
}

export default HomePage;

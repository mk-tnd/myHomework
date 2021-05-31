/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SinglePostPage() {
  let params = useParams();
  let [post, setPost] = useState({});

  useEffect(() => {
    async function getPostsById() {
      let response = await fetch("http://localhost:8000/posts/" + params.id);
      let data = await response.json();
      setPost(data.data);
    }
    getPostsById();
  }, [params.id]);

  return (
    <div>
      <div className="postapp-header">
        <h1
          css={css`
            color: #ffffff;
          `}
        >
          My Post
        </h1>
      </div>
      <div
        css={css`
          text-align: center;
        `}
      >
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default SinglePostPage;

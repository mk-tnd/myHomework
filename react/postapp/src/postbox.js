/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "./component/Button";

function Postbox() {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(null);
  const history = useHistory();

  useEffect(function () {
    async function getPosts() {
      try {
        let response = await fetch("http://localhost:8000/posts");
        let myData = await response.json();
        //ดึง obj  data จ่าก array data console.log("____Data")
        setPosts(myData.data);
      } catch (error) {
        setIsError(true);
      }
    }
    getPosts();
  }, []);

  async function handleDeletePost(id) {
    let response = await fetch("http://localhost:8000/posts/" + id, {
      method: "DELETE",
    });

    if (response.ok) {
      let newPosts = posts.filter((post) => {
        return post.id !== id;
      });
      setPosts(newPosts);
    }
  }

  return (
    <div className="postbox-container">
      {isError && <h1>Error! Error! Error! Error!</h1>}
      {posts.map((post) => {
        return (
          <div key={post.id} className="postbox">
            <h4
              css={css`
                font-weight: 500;
                font-size: 22px;
                margin: 10px 0;
              `}
              onClick={() => history.push("/post/" + post.id)}
            >
              Title: {post.title}
            </h4>
            <p
              css={css`
                font-weight: 500;
              `}
            >
              Detail: {post.content}
            </p>
            <div className="postbox-footer">
              <div>author:</div>
              <div>
                <Button
                  primary={true}
                  onClick={() => history.push("/edit/" + post.id)}
                >
                  Edit
                </Button>
                <Button
                  primary={true}
                  onClick={() => handleDeletePost(post.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Postbox;

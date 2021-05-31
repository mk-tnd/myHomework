import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function EditPost() {
  let history = useHistory();
  let params = useParams();
  let [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function getPostsById() {
      let response = await fetch("http://localhost:8000/posts/" + params.id);
      let data = await response.json();
      setPost(data.data);
    }
    getPostsById();
  }, [params.id]);

  function handleEditTitle(event) {
    setTitle((post.title = event.target.value));
  }

  function handleEditDescription(event) {
    setDescription((post.content = event.target.value));
    console.log(post.content);
  }

  async function updatePost() {
    let response = await fetch("http://localhost:8000/posts/" + params.id, {
      method: "PUT",
      body: JSON.stringify({ title: title, content: description }),
      headers: {
        "content-type": "application/json",
      },
    });
    let data = await response.json();
    setPost(data.data);

    if (response.ok) {
      history.push("/");
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    updatePost();
  }

  console.log(post.title ? post.title : null);

  return (
    <div>
      <div>
        <h1>Edit</h1>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={post.title || ""}
            onChange={handleEditTitle}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={post.content || ""}
            onChange={handleEditDescription}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default EditPost;

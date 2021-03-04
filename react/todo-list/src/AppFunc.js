import { useState } from "react";

function AppFunc() {
  const [list, setList] = useState([
    {
      task: "to do 1",
      status: true,
    },
    {
      task: "to do 2",
      status: false,
    },
    {
      task: "to do 3",
      status: true,
    },
  ]);

  const [text, setText] = useState("");

  function handleText(e) {
    setText(e.target.value);
  }

  // function handleAdd() {
  //   setList([...list, { task: text, status: false }]);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, { task: text, status: false }]);
    setText("");
  }

  function handleDelete(indexToDelete) {
    console.log(indexToDelete);
    setList(list.filter((val, index) => index !== indexToDelete));
  }

  const handleEdit = (indexToEdit) => {
    let textToEdit = prompt("New List");
    if (textToEdit && textToEdit !== "")
      setList(
        list.map((item, index) =>
          indexToEdit === index ? { ...item, task: textToEdit } : item
        )
      );
  };

  function handleToggle(indexToToggle) {
    setList(
      list.map((item, index) => {
        return indexToToggle === index
          ? { ...item, status: !item.status }
          : item;
      })
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleText} />
        <button>ADD</button>
      </form>
      <ul>
        {list.map((
          { task, status },
          index //{task: 'todo', status: false} const {task} = item
        ) => (
          <li key={index}>
            <span
              onClick={() => handleToggle(index)}
              style={{
                marginRight: "20px",
                textDecoration: status ? "line-through" : "none",
              }}
            >
              {task}
            </span>
            <button
              onClick={() => {
                handleEdit(index);
              }}
            >
              EDIT
            </button>
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              DEL
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppFunc;

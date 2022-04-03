import { useState } from "react";

function Todo() {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    setTodos((prevTodos) => [Todo, ...prevTodos]);
    setTodo("");
  };
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  return (
    <div>
      <h1>To Do List ({Todos.length})</h1>

      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" value={Todo} />
        <button>Submit</button>
      </form>
      <hr />
      <ul>
        {Todos.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todo;

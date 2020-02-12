import React, { useState } from "react";
import "../../src/App.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState();

  const deleteTodo = IndexToDelete => {
    setTodos(prevTodos => {
      return prevTodos.filter((value, index) => {
        return IndexToDelete !== index;
      });
    });
  };

  /*const AddTodo = () => {
    setTodos(prevTodos => [...prevTodos, inputValue]);
    setInputValue("");
  }

  const keyPress = e => {
    if (e.keyCode === 13) {
        todos == "" ? null : nameoftheFunction(todos);
        setTodos({ todos: "" });
    }
}*/

  console.log(todos);

  return (
    <div className="box1">
      <h1 class="tittleTodo"> todos </h1>
      <div className="maininput input-group ">
        <input
          type="text"
          className="form-control"
          name={inputValue}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Enter new todo"
          aria-label="Enter new todo"
          aria-describedby="button-addon2"
        />
        <div className="box3 input-group-append" />
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            setTodos(prevTodos => [...prevTodos, inputValue]);
            setInputValue("");
          }}
          type="button"
        >
          Add
        </button>
      </div>
      <ul className="UlMain list-group">
        {todos.map((value, index) => {
          return (
            <li
              className="list-group-item  d-flex justify-content-between align-items-center"
              key={index}
            >
              {" "}
              {value}
              <span
                type="button"
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                X
              </span>
            </li>
          );
        })}
        <li className="itemLi list-group-item  d-flex justify-content-between align-items-center">
          {todos.length} Items
        </li>
      </ul>
    </div>
  );
};
export default Todos;

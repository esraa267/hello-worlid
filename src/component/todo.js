import React from "react";

function Todo({ todos, removetodo }) {
  return todos.map((todo, index) => (
    <div className={"todo-row"} key={index}>
      <div key={todo.id}> {todo.text}</div>

      <div className="icons">
        <i
          class="bi bi-file-x-fill delete-icon"
          onClick={() => removetodo(todo.id)}
        ></i>
      </div>
    </div>
  ));
}
export default Todo;

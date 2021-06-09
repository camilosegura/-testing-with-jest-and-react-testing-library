import React from "react";
import { TodosContext } from "../context/todos";

export default function Todos() {
  const todos = React.useContext(TodosContext);
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

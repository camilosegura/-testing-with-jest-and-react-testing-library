import React from "react";

export const TodosContext = React.createContext([]);

export default function Todos({ todos = [], children }) {
  return (
    <TodosContext.Provider value={todos}>{children}</TodosContext.Provider>
  );
}

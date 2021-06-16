import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Todos from "./context/todos";

const todosDefault = ["To Cook", "To Clean"];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Todos todos={todosDefault}>
        <Provider store={store}>
          <App />
        </Provider>
      </Todos>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

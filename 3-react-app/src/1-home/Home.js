import React from "react";
import logo from "../logo.svg";

export default function Home() {
  const [showElement, setShowElement] = React.useState(false);

  const onClickBtn = () => {
    setShowElement(true);
  };

  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <button onClick={onClickBtn}>Click Me</button>
      {showElement && <span id="shown">Hello World!!</span>}
    </header>
  );
}

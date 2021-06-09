import ReactDOM from "react-dom";
import Home from "../Home";

const root = document.createElement("div");

test("should have text", () => {
  ReactDOM.render(<Home />, root);

  expect(root.innerHTML.search(/learn react/gi) > -1).toBe(true);

  root.querySelector("button").click();
});

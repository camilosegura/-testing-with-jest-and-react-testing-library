// import { render, screen } from "@testing-library/react";
import { render, screen } from "test-utils";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "./App";

test("renders learn react link", () => {
  render(
    // <Router history={createMemoryHistory({ initialEntries: ["/"] })}>
    <App />
    // </Router>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders form", () => {
  render(
    <Router history={createMemoryHistory({ initialEntries: ["/user"] })}>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/Create user/i);
  expect(linkElement).toBeInTheDocument();
});

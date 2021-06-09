import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render as rtlRender } from "@testing-library/react";

function render(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Router history={history}>{children}</Router>;
  }
  return {
    ...rtlRender(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
}

export * from "@testing-library/react";
export { render };

import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render as rtlRender } from "@testing-library/react";
import TodosProvider from "../src/context/todos";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../src/store/reducer";
import { Children } from "react";

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

function renderWithContext(ui, { todos = [], ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <TodosProvider todos={todos}>{children}</TodosProvider>;
  }

  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

function renderWithStore(
  ui,
  { initialState = { count: 3 }, ...renderOptions } = {}
) {
  const store = createStore(reducer, initialState);

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

function renderWithAll(
  ui,
  {
    initialState = { count: 3 },
    todos = [],
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
    ...renderOptions
  } = {}
) {
  const store = createStore(reducer, initialState);

  function WrapperStore({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  function WrapperContex({ children }) {
    return <TodosProvider todos={todos}>{children}</TodosProvider>;
  }

  function WrapperRouter({ children }) {
    return <Router history={history}>{children}</Router>;
  }

  function Wrapper({ children }) {
    return (
      <WrapperRouter>
        <WrapperContex>
          <WrapperStore>{children}</WrapperStore>
        </WrapperContex>
      </WrapperRouter>
    );
  }

  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

export * from "@testing-library/react";
export { render, renderWithContext, renderWithStore, renderWithAll };
export { default as userEvent } from "@testing-library/user-event";

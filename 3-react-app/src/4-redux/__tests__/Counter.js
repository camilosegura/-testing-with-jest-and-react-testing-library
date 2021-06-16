import React from "react";
import { Provider } from "react-redux";
import {
  render,
  userEvent,
  renderWithStore,
  screen,
  renderWithAll,
} from "test-utils";
import Counter from "../Counter";
import store from "../../store/store";

import { createStore } from "redux";
import reducer from "../../store/reducer";

test("can render with redux with defaults", () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
  userEvent.click(getByText("+"));
  expect(getByLabelText(/count/i)).toHaveTextContent("1");
});

test("render with custom state", () => {
  // const customStore = createStore(reducer, { count: 3 });

  // const { getByLabelText, getByText } = render(
  //   <Provider store={customStore}>
  //     <Counter />
  //   </Provider>
  // );
  renderWithAll(<Counter />);
  userEvent.click(screen.getByText("-"));
  expect(screen.getByLabelText(/count/i)).toHaveTextContent("2");
});

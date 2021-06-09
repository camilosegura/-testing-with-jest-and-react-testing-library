import { render, renderWithContext, screen } from "test-utils";
import Todos from "../Todos";

const todos = ["To buy lunch", "To work"];

test("should render todos", () => {
  render(<Todos />, { todos });

  expect(screen.getByText(/todo/i)).toBeInTheDocument();
});

test("should render todo", () => {
  renderWithContext(<Todos />, { todos });
  expect(screen.getAllByRole("listitem").length).toBe(2);
});

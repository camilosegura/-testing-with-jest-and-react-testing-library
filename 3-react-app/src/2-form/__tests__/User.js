import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import User from "../User";

const mockIntercepRequest = jest.fn();

const server = setupServer(
  // Describe the requests to mock.
  rest.post("http://some-domain.com/api/users", (req, res, ctx) => {
    console.log("req", req.body);

    mockIntercepRequest(req.body);

    return res(
      ctx.json({
        title: "Lord of the Rings",
        author: "J. R. R. Tolkien",
      })
    );
  })
);
beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen();
});
afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close();
});

test("should disable button", async () => {
  render(<User />);

  userEvent.type(screen.getByLabelText(/name/i), "User name");
  userEvent.selectOptions(screen.getByLabelText(/doc type/i), "ti");

  const submitBtn = screen.getByText(/save/i);

  userEvent.click(submitBtn);

  expect(submitBtn).toBeDisabled();
  await waitFor(() => {
    expect(mockIntercepRequest).toHaveBeenCalledWith({
      name: "User name",
      docType: "ti",
    });
  });
});

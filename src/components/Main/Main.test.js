import { render, screen } from "@testing-library/react";
import Main from "./Main";

test("renders main element", () => {
  render(<Main />);
  const main = screen.getByTestId("main");
  expect(main).toBeInTheDocument();
});

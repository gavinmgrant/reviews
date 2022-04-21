import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(() => {
  cleanup();
});

test("renders header component", () => {
  render(<App />);
  const header = screen.getByText(/Reviews/i);
  expect(header).toBeInTheDocument();
  expect(header).toHaveClass("Title");
});

test("renders main component", () => {
  render(<App />);
  const main = screen.getByRole("main");
  expect(main).toBeInTheDocument();
});

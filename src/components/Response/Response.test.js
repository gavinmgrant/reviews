import { render, renderHook, screen, cleanup } from "@testing-library/react";
import Response from "./Response";

afterEach(() => {
  cleanup();
});

test("renders the response component", () => {
  render(<Response />);
  const response = screen.getByTestId("response");
  expect(response).toBeInTheDocument();
});

test("returns the responseContent state", () => {
  const { result, rerender } = renderHook(
    ({ responseContent } = {}) => responseContent,
    {
      initialProps: { responseContent: "Test response." },
    }
  );
  expect(result.current).toBe("Test response.");
  rerender({ responseContent: "" });
  expect(result.current).toBe("");
});

test("returns the isEditable state", () => {
  const { result, rerender } = renderHook(({ isEditable } = {}) => isEditable, {
    initialProps: { isEditable: true },
  });
  expect(result.current).toBe(true);
  rerender({ isEditable: false });
  expect(result.current).toBe(false);
});

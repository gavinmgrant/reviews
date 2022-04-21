import { render, screen } from "@testing-library/react";
import Review from "./Review";

test("renders a review component", () => {
  const review = {
    id: "100",
    author: "Test Author",
    place: "Test Place",
    published_at: "Thu Jun 27 1974 11:46:39 GMT-0500 (Central Daylight Time)",
    content: "Ipsum mollit anim pariatur eu.",
  };
  render(
    <Review
      id={review.id}
      author={review.author}
      place={review.place}
      published={review.published_at}
      content={review.content}
    />
  );
  const reviewElement = screen.getByTestId("review-100");
  console.log(reviewElement);
  expect(reviewElement).toBeInTheDocument();
  expect(reviewElement).toHaveTextContent(review.author);
  expect(reviewElement).toHaveTextContent(review.place);
  expect(reviewElement).toHaveTextContent("06/27/1974");
  expect(reviewElement).toHaveTextContent(review.content);
});

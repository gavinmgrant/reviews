import { useContext } from "react";
import ResponsesContext from "../../contexts/ResponsesContext";
import dayjs from "dayjs";
import Stars from "../Stars/Stars";
import { Xmark, Messages } from "../../utils/Icons";
import "./Review.css";

const Review = ({
  id,
  author,
  place,
  published,
  rating,
  content,
  isReviewDetail,
  onClose,
}) => {
  const context = useContext(ResponsesContext);
  const date = dayjs(published).format("MM/DD/YYYY");
  const hasResponse =
    context.responses.filter((response) => response.id === id).length > 0;
  const displayContent =
    content.length > 100 && !isReviewDetail
      ? content.slice(0, 100) + "..."
      : content;

  return (
    <article
      data-testid={`review-${id}`}
      className={isReviewDetail ? "ReviewDetail" : "ReviewCard"}
    >
      <h2 className="ReviewPlace">{place}</h2>
      <Stars rating={rating} />
      <p className="ReviewContent">{displayContent}</p>
      <div className="ReviewFooter">
        <span className={isReviewDetail ? "ReviewAuthorDetail" : ""}>
          {author}
        </span>
        <span className="ReviewDate">{date}</span>
      </div>
      {isReviewDetail && (
        <div className="IconXmark" onClick={onClose}>
          {Xmark}
        </div>
      )}
      {hasResponse && !isReviewDetail && <div className="IconMessages">{Messages}</div>}
    </article>
  );
};

export default Review;

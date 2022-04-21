import { useState, useEffect } from "react";
import Review from "../Review/Review";
import Response from "../Response/Response";
import "./Main.css";

const Main = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewId, setReviewId] = useState(null);
  const [isReviewDetail, setIsReviewDetail] = useState(false);

  const getReviews = () => {
    fetch("reviews.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReviewClick = (id) => {
    setReviewId(id);
    setIsReviewDetail(true);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <main data-testid="main">
      {isReviewDetail ? (
        reviews.map((review) => {
          if (review.id === reviewId) {
            return (
              <div key={review.id}>
                <Review
                  id={review.id}
                  author={review.author}
                  place={review.place}
                  published={review.published_at}
                  rating={review.rating}
                  content={review.content}
                  isReviewDetail={isReviewDetail}
                  onClose={() => setIsReviewDetail(false)}
                />
                <Response id={review.id} />
              </div>
            );
          } else {
            return null;
          }
        })
      ) : (
        <div className="Container">
          {reviews.map((review) => {
            return (
              <div key={review.id} onClick={() => handleReviewClick(review.id)}>
                <Review
                  id={review.id}
                  author={review.author}
                  place={review.place}
                  published={review.published_at}
                  rating={review.rating}
                  content={review.content}
                  isReviewDetail={isReviewDetail}
                />
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Main;

import { Star } from "../../utils/Icons";
import "./Stars.css";

const Stars = ({ rating }) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <span className="StarYellow" key={i}>
          {Star}
        </span>
      );
    } else {
      stars.push(
        <span className="StarGray" key={i}>
          {Star}
        </span>
      );
    }
  }

  return <section className="Stars">{stars}</section>;
};

export default Stars;

import { useState, useContext } from "react";
import ResponsesContext from "../../contexts/ResponsesContext";
import { Reply, Ellipsis } from "../../utils/Icons";
import dayjs from "dayjs";
import "./Response.css";

const Response = ({ id }) => {
  const context = useContext(ResponsesContext);
  const response = context.responses.find((response) => response.id === id);

  const [isEditable, setIsEditable] = useState(false);
  const [responseContent, setResponseContent] = useState(
    response?.content || ""
  );

  const handleResponseContentChange = (e) => setResponseContent(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toDateString();
    if (response) {
      context.updateResponse({
        ...response,
        content: responseContent,
        date: dayjs(date).format("MM/DD/YYYY"),
      });
    } else {
      context.addResponse({
        id: id,
        content: responseContent,
        date: dayjs(date).format("MM/DD/YYYY"),
      });
    }
    setIsEditable(false);
  };

  return (
    <div data-testid="response" className="Response">
      {isEditable ? (
        <form className="ResponseForm" onSubmit={handleSubmit}>
          <label className="ResponseLabel">Response:</label>
          <input
            required
            autoFocus
            className="ResponseInput"
            type="text"
            name="content"
            placeholder="Write a response..."
            value={responseContent}
            onChange={handleResponseContentChange}
          />
          <label className="ResponseLabel">Name:</label>
          <input
            required
            className="ResponseInput"
            type="text"
            name="username"
            placeholder="Enter your name..."
            value={context.username}
            onChange={context.setUsername}
          />
          <button className="IconReply IconDark" type="submit" disabled={!isEditable}>
            {Reply}
          </button>
        </form>
      ) : (
        <>
          <button
            className="IconReply"
            type="button"
            onClick={() => setIsEditable(true)}
          >
            {Reply}
          </button>
          <p className="ResponseContent" onClick={() => setIsEditable(true)}>
            {response ? response?.content : "Respond to this review."}
          </p>
          <div className="ResponseFooter">
            <span>{context?.username}</span>
            <span className="ResponseDate">{response?.date}</span>
          </div>
        </>
      )}
      <button
        className="IconEllipsis"
        onClick={() =>
          context?.username ? setIsEditable(!isEditable) : setIsEditable(true)
        }
      >
        {Ellipsis}
      </button>
    </div>
  );
};

export default Response;

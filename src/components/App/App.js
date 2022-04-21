import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ResponsesContext from "../../contexts/ResponsesContext";

const App = () => {
  const [username, setUsername] = useState("");
  const handleUsernameChange = (e) => setUsername(e.target.value);

  const [responses, setResponses] = useState([]);
  const handleAddResponse = (response) => {
    setResponses([...responses, response]);
  };
  const handleUpdateResponse = (response) => {
    const updatedResponses = responses.map((r) =>
      r.id === response.id ? response : r
    );
    setResponses(updatedResponses);
  };

  return (
    <ResponsesContext.Provider
      value={{
        username: username,
        setUsername: handleUsernameChange,
        responses: responses,
        addResponse: handleAddResponse,
        updateResponse: handleUpdateResponse,
      }}
    >
      <Header />
      <Main />
    </ResponsesContext.Provider>
  );
}

export default App;

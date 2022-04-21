import { createContext } from "react";

const ResponsesContext = createContext({
  username: "",
  setUsername: () => {},
  responses: [],
  addResponse: () => {},
  updateResponse: () => {},
});

export default ResponsesContext;

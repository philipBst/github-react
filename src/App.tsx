import { Button } from "@chakra-ui/react";

import routes from "./routes";

import "./App.css";
import { useRoutes } from "react-router-dom";

function App() {
  const content = useRoutes(routes);
  return content;
}

export default App;

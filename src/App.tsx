/* eslint-disable import/extensions */
import { FC } from "react";
import "antd/dist/antd.css";
import { v4 as uuidv4 } from "uuid";
import { Main } from "./screens/Main";

const App: FC = () => {
  if (sessionStorage.getItem("uuid") === null) {
    sessionStorage.setItem("uuid", uuidv4());
  }
  return <Main />;
};

export default App;

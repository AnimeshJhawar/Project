import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LocalStorageProvider from "./context/languageContext";
import Firebase, { FirebaseContext } from "./firebase";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <LocalStorageProvider>
        <App />
      </LocalStorageProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

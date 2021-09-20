import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import ToDosProvider from "./context.jsx";

ReactDOM.render(
  <React.StrictMode>
    <ToDosProvider>
      <App />
    </ToDosProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
// components
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<div>Loading, please wait...</div>}>
        <App />
      </Suspense>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

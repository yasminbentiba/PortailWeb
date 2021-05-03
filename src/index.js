import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";

import {ProductProvider} from "./Context";

import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>,
  document.getElementById("root")
);
registerServiceWorker();

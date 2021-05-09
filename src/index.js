import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";

import {ProductProvider} from "./Forum/Context";
import {PostProvider} from "./Forum/PostContext";



import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(
  <PostProvider>
    <ProductProvider>
      <App />
      </ProductProvider>
  </PostProvider>,
  document.getElementById("root")
);
registerServiceWorker();

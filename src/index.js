import React from "react";
import reactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import App from "./components/App";

reactDom.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);

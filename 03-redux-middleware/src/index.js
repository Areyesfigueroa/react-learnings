import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import logger from "redux-logger";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import postsReducer from "./reducer";
import thunk from "redux-thunk";

const store = createStore(postsReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

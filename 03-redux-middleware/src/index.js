import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import logger from "redux-logger";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { counterReducer } from "./reducer";

const myLogger = (store) => (next) => (action) => {
  next(action);
};

const secondMiddleware = (store) => (next) => (action) => {
  next(action);
};

const capAtTen = (store) => (next) => (action) => {
  if (store.getState() >= 10) {
    return next({ type: "DECREMENT" });
  }
  next(action);
};

// const myLogger = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log("middleware ran");
//       next(action);
//     };
//   };
// };

const store = createStore(
  counterReducer,
  applyMiddleware(myLogger, secondMiddleware, capAtTen, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

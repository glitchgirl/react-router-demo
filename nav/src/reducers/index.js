import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleWare = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
  <BrowserRouter>
    <div>
        <Route path="" component={}>
        </Route>
        <Route path="" component={}>
        </Route>
    </div>
    </BrowserRouter>
    <App />
  </Provider>,
  document.querySelector(".container")
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./containers/App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers/rootReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const storeRedux = createStore(rootReducer);

root.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <App />
    </Provider>
  </React.StrictMode>
);

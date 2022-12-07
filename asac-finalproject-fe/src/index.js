import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import store from './Helper/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

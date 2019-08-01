import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";
import ErrorBoundry from "./components/ErrorBoundry";
import MovieStoreService from "./services/MovieStoreService";
import { MovieStoreServiceProvider } from "./components/MovieStoreServiceContext";

import Store from "./store";

const service = new MovieStoreService();

ReactDOM.render(
  <Provider store={Store}>
    <ErrorBoundry>
      <MovieStoreServiceProvider value={service}>
        <Router>
          <App />
        </Router>
      </MovieStoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);

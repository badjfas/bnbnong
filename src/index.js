import React from "react";
import ReactDOM from "react-dom";
import App from "./Component/App";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from 'react-apollo-hooks';
import Client from "./Apollo/Client";
import { Provider } from "react-redux";
import { createStore } from 'redux'
import rootReducer  from "./store";
const store = createStore(rootReducer )

ReactDOM.render(
  <ApolloProvider client={Client}>
    <Provider store={store}>
        <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

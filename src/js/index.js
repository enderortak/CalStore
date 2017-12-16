import "babel-polyfill";
import { render } from "react-dom";
import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider as ReduxStoreScope } from "react-redux";
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { AppContainer as HMRScope } from 'react-hot-loader';
import reducerCollection from "./reducers/_collection";
// import subscriptionCollection from "./subscriptions/_collection";
import App from "./components/App";
import "../style/semantic.css";

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const devToolsEnhancer = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(
  reducerCollection,
  applyMiddleware(middleware),
  devToolsEnhancer,
);

if (module.hot) module.hot.accept();

document.body.innerHTML = '<div id="root"></div>';


// store.subscribe(() => {
//   subscriptionCollection.forEach((subscription) => {
//     subscription(store.getState(), store.dispatch);
//   });
// });
render(

  <ReduxStoreScope store={store}>
    <HMRScope>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </HMRScope>
  </ReduxStoreScope>


  , document.getElementById("root"),
);


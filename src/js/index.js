import "babel-polyfill";
import { render } from "react-dom";
import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider as ReduxStoreScope } from "react-redux";
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter } from "react-router-dom";
import { AppContainer as HMRScope } from 'react-hot-loader';
import reducerCollection from "./reducers/_collection";
// import subscriptionCollection from "./subscriptions/_collection";
import App from "./components/App";
import "../style/semantic.css";

// Create a history of your choo


const devToolsEnhancer = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(
  reducerCollection,
  devToolsEnhancer,
);

if (module.hot) module.hot.accept();

document.body.innerHTML = '<div id="root"></div><div id="modal"></div>';


// store.subscribe(() => {
//   subscriptionCollection.forEach((subscription) => {
//     subscription(store.getState(), store.dispatch);
//   });
// });
render(

  <ReduxStoreScope store={store}>
    <HMRScope>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HMRScope>
  </ReduxStoreScope>


  , document.getElementById("root"),
);


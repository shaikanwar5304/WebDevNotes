import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
//persistor stores the redux store in the local storage
import { PersistGate } from "redux-persist/integration/react";
//persistgate makes sure that the redux store is loaded before the app is rendered

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

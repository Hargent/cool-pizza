import "./index.css";

import App from "./app/app.tsx";
import {Provider} from 'react-redux'
import React from "react";
import ReactDOM from "react-dom/client";
import store from './redux/store';

ReactDOM.createRoot(document.getElementById("root")!).render(
  
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

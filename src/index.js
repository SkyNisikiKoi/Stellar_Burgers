import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import {App} from "../src/components/App/App.jsx";
//import { createStore } from 'redux';
//import {rootReducer} from '../src/services/reducers/index.js'
//import { composeWithDevTools } from 'redux-devtools-extension'



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




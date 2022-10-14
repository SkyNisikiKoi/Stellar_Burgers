import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";
import {App} from "../src/components/App/App.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <div id="react-modals"></div>
    <div id="app-root"></div>
  </React.StrictMode>
);


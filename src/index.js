import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { createRoot } from 'react-dom/client';
import './index.css'

const root = document.getElementById("root");

const app = (
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

const rootElement = createRoot(root);
rootElement.render(app);

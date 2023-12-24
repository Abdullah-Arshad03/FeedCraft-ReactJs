import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { createRoot } from 'react-dom/client';
import SignIn from "./Pages/Sign-in/SignIn";
import AuthProvider from "./Pages/Sign-in/AuthProvider";
import './index.css'

const root = document.getElementById("root");

const app = (

  <BrowserRouter>
    <React.StrictMode>
    <AuthProvider>
      <App />
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
 
  
);

const rootElement = createRoot(root);
rootElement.render(app);

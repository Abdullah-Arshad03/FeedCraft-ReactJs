import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import SignIn from './Pages/Sign-in/SignIn';
import {AuthProvider}  from './Pages/Sign-in/AuthContext';
import './index.css';

const root = document.getElementById('root');

const app = (
  <AuthProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </AuthProvider>
);

const rootElement = createRoot(root);
rootElement.render(app);

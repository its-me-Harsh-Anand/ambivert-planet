import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Auth0ProviderWithHistory from './hooks/auth0-provider';
import {BrowserRouter as Router} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
);

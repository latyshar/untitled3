import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import './css/app.css';
import 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)


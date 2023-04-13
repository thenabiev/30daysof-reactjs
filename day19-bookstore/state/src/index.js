import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app7/App';
import { BrowserRouter } from 'react-router-dom';
import ApppContextProvider from './app7/context/appContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ApppContextProvider>
            <App />
        </ApppContextProvider>
    </BrowserRouter>
);


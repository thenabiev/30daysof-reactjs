import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

//Redux
import { store } from './state/store';
import { Provider } from 'react-redux';

//Router 
import {BrowserRouter} from 'react-router-dom'
import Admin from './pages/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


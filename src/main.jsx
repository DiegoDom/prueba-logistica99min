import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import { LogisticaApp } from './LogisticaApp';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <LogisticaApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

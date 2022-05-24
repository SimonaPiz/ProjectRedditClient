import React from 'react';
import { createRoot } from 'react-dom/client';
//importare Provider per poter gestire lo store più facilmente
import { Provider } from 'react-redux';
import './index.css';

import App from './Components/App/App';
//importare lo store per gestire lo stato
import {store}  from './Components/App/store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>    
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

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


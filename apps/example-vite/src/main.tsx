import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import '@ds-starter/ui/css/styles.css';

import './index.css';

// biome-ignore lint: *
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

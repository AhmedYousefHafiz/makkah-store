import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// @ts-ignore: side-effect import of CSS module without type declarations
import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

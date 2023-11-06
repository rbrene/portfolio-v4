import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './core/App';
import { HTML } from './components/styles/global';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HTML.Root />
    <HTML.StyleSheet />
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();

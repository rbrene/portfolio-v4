import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Colors from './styled-components/global/Colors';
import Fonts from './styled-components/global/Fonts';
import Styles from './styled-components/global/Styles';
import App from './ui-core/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Colors />
      <Fonts />
      <Styles />
      <App />
    </Router>
  </React.StrictMode>
);

serviceWorkerRegistration.register();

import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Colors from './styles/global/colors';
import Fonts from './styles/global/fonts';
import Styles from './styles/global/styles';
import { Loader } from './components/spec/Loader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = lazy(() => import('./ui-core/App'));

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <Colors />
      <Fonts />
      <Styles />
      <Router>
        <App />
      </Router>
    </Suspense>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

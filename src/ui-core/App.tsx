import React, { Suspense, lazy } from 'react';
import Loader from '../components/Progressbar';
import { SectionRefs } from '../context/sections';

const Header = lazy(() => import('../components/Header'));
const Routes = lazy(() => import('../routes/Routes'));


const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <SectionRefs>
          <Header />
          <Routes />
        </SectionRefs>
      </Suspense>
    </>
  );
}

export default App;

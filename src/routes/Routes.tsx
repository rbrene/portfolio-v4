import { Suspense, lazy } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { Sections } from '../components/context/SectionRefs';
import Hexagon from '../components/spec/Hexagon';
import { Loader } from '../components/spec/Loader';
import { Main } from '../styles/components/common/main';


//const Hexagon = lazy(() => import('../components/spec/Hexagon'));
const Navbar = lazy(() => import('../components/spec/Navbar'));
const Hero = lazy(() => import('./sections'));

const Routes = () => {

    return (
        <Suspense fallback={<Loader />}>
            <Hexagon />
            <Sections>
                <Navbar />
                <Main>
                    <Switch>
                        <Route path='/' element={<Hero />} />
                    </Switch>
                </Main>
            </Sections>
        </Suspense>
    )
};

export default Routes;

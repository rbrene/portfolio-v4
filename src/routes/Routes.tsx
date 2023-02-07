import { Suspense, lazy } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { Sections } from '../components/context/SectionRefs';
import { Main } from '../styles/components/common/main';


const Hexagon = lazy(() => import('../components/spec/Hexagon'));
const Navbar = lazy(() => import('../components/spec/Navbar'));
const Hero = lazy(() => import('./sections'));

const Routes = () => {
    return (
        <Suspense fallback={<p children='Loading...' />}>
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

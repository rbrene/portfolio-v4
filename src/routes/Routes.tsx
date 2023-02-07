import { Routes as Switch, Route } from 'react-router-dom';
import { Sections } from '../components/context/SectionRefs';
import { Hexagon } from '../components/spec/Hexagon';
import { Navbar } from '../components/spec/Navbar';
import { Hero } from './sections';
import { Main } from '../styles/components/common/main';


const Routes = () => {

    return (
        <>
            <Hexagon />
            <Sections>
                <Navbar />
                <Main>
                    <Switch>
                        <Route path='/' element={<Hero />} />
                    </Switch>
                </Main>
            </Sections>
        </>
    )
};

export default Routes;

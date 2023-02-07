import React from 'react';
import { HeroGrid as Grid } from '../../styles/layouts/grids';
import { Home } from './Home';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';


const Hero = () => {
    return (
        <Grid>
            <Home />
            <About />
            <Projects />
            <Contact />
        </Grid>
    )
};

export default Hero;
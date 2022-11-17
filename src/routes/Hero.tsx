import React from 'react';
import { HeroGrid } from '../styled-components/layouts/grids/index';
import Home from '../sections/Home';
import About from '../sections/About';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';


const Hero = () => {
    return (
        <HeroGrid>
            <Home />
            <About />
            <Portfolio />
            <Contact />
        </HeroGrid>
    )
}

export default Hero;
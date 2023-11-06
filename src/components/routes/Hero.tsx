import React from 'react';
import { Home, About, Contact } from '../pages';
import { GridLayout } from '..';


const Component = () => {

    return (
        <GridLayout.Grid rows={`100dvh max-content 100dvh`}>
            <Home />
            <About />
            <Contact />
        </GridLayout.Grid>
    )
};

export default Component;
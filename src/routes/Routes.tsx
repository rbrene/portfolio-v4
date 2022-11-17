import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Hero from './Hero';


const Routes = () => {
    return (
        <Switch>
            <Route path='/' element={<Hero />} />
        </Switch>
    )
};

export default Routes;

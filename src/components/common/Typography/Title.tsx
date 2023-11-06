import React from 'react';
import { ICHeading } from './types';
import * as Element from './styles';


const Component: React.FC<ICHeading> = ({ children, title }) => {

    if (title && children) throw new Error(`'children' and 'title' prop cannot be defined at the same time`);

    return (
        <Element.SCTitle>
            {title ? title : children}
        </Element.SCTitle>
    );
};

export default Component;
import React from 'react';
import { ICHeading } from './types';
import { SCH4 } from './styles';


const Component: React.FC<ICHeading> = ({ children, title }) => {

    if (title && children) throw new Error(`'children' and 'title' prop cannot be defined at the same time`);

    return (
        <SCH4>
            {title ? title : children}
        </SCH4>
    );
};

export default Component;
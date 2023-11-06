import React from 'react';
import { ICHeading } from './types';
import { SCH3 } from './styles';


const Component: React.FC<ICHeading> = ({ children, title }) => {

    if (title && children) throw new Error(`'children' and 'title' prop cannot be defined at the same time`);

    return (
        <SCH3>
            {title ? title : children}
        </SCH3>
    );
};

export default Component;
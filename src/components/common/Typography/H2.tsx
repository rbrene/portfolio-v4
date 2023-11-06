import React from 'react';
import { ICHeading } from './types';
import { SCH2 } from './styles';


const Component: React.FC<ICHeading> = ({ children, title }) => {

    if (title && children) throw new Error(`'children' and 'title' prop cannot be defined at the same time`);

    return (
        <SCH2>
            {title ? title : children}
        </SCH2>
    );
};

export default Component;
import React from 'react';
import { ICHeading } from './types';
import { SCH6 } from './styles';


const Component: React.FC<ICHeading> = ({ children, title }) => {

    if (title && children) throw new Error(`'children' and 'title' prop cannot be defined at the same time`);

    return (
        <SCH6>
            {title ? title : children}
        </SCH6>
    );
};

export default Component;
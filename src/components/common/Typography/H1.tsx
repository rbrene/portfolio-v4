import React from 'react';
import { ICHeading } from './types';
import { SCH1 } from './styles';


const Component: React.FC<ICHeading> = ({ children, title }) => {

    if (title && children) throw new Error(`'children' and 'title' prop cannot be defined at the same time`);

    return (
        <SCH1>
            {title ? title : children}
        </SCH1>
    );
};

export default Component;
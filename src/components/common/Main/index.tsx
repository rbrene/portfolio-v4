import React from 'react';
import { MainComponentProps as Props } from './types';
import { SCMain as Element } from './styles';


const Component: React.FC<Props> = ({ children }) => {
    return (
        <Element>
            {children}
        </Element>
    )
};

export default Component;
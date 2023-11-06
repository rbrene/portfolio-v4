import React from 'react';
import { ISection } from './types';
import { SCSection as Element } from './styles';


const Component: React.FC<ISection> = ({ id, children, background, color }) => {
    return (
        <Element id={id} $background={background} $color={color}>
            {children}
        </Element>
    )
};

export default Component;
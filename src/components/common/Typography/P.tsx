import React from 'react';
import { ICParagraph } from './types';
import * as Element from './styles';
import { configMargin } from '../../../helpers';


const Component: React.FC<ICParagraph> = ({ marginblock, width, align, children, text }) => {
    const margins = marginblock === undefined ? undefined : configMargin(marginblock);

    if (text && children) {
        throw new Error(`'children' and 'text' prop cannot be defined at the same time`)
    };

    return (
        <Element.SCP $marginblock={margins} $width={width} $align={align}>
            {text ? text : children}
        </Element.SCP>
    );
};

export default Component;
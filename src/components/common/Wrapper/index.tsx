import React from 'react';
import { ICContainer } from './types';
import { SCContainer } from './styles';


const CWrapper: React.FC<ICContainer> = (props) => {
    const { children, position, inset, top, right, bottom, left, width, background, color, zindex } = props;

    return (
        <SCContainer
            $position={position ? position : 'relative'}
            $inset={inset}
            $top={top}
            $right={right}
            $bottom={bottom}
            $left={left}
            $width={width}
            $background={background}
            $color={color}
            $zindex={zindex}
        >
            {children}
        </SCContainer>
    );
};

export default CWrapper;
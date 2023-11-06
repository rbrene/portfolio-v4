import React from 'react';
import { ICBackgroundImage } from './types';
import { Element } from './styles';


const Component: React.FC<ICBackgroundImage> = ({ src, blend, size, color, position, clip, opacity, spring, children }) => {

    return <Element
        $src={src}
        $blend={blend}
        $size={size}
        $color={color}
        $position={position}
        $opacity={opacity}
        $clip={clip}
        style={spring}
        children={children ? children : undefined}
    />;
};

export default Component;
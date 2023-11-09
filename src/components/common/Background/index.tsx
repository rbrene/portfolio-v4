import React from 'react';
import { ICBackgroundImage } from './types';
import { Element } from './styles';
import { CLoader } from '../../context';
import { useSpring } from 'react-spring';


const Component: React.FC<ICBackgroundImage> = ({ src, blend, size, color, position, clip, opacity, spring, children }) => {
    const { transition } = React.useContext(CLoader);
    const style = useSpring({
        opacity: transition ? opacity : 0,
        delay: 500
    });

    return <Element
        $src={src}
        $blend={blend}
        $size={size}
        $color={color}
        $position={position}
        $opacity={opacity}
        $clip={clip}
        style={{ ...style, ...spring }}
        children={children ? children : undefined}
    />;
};

export default Component;
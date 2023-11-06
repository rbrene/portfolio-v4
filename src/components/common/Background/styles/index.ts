import styled from 'styled-components';
import { animated } from 'react-spring';
import { ISCBackgroundImage } from '../types';


const Background = styled(animated.div) <ISCBackgroundImage>`
    position: absolute;
    inset: 0;
    max-width: 100%;
    width: 100%;
    height: 100%;
    ${({ $src }) => $src && `background-image: url(${$src})`};
    background-size: ${({ $size }) => $size ? $size : 'cover'};
    background-repeat: no-repeat;
    ${({ $position }) => $position && `background-position: ${$position};`}
    ${({ $clip }) => $clip && `-webkit-background-clip: ${$clip}; background-clip: ${$clip}`};
    ${({ $opacity }) => $opacity && `opacity: ${$opacity};`}
    z-index: -1;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        max-width: 100%;
        width: 100%;
        height: 100%;
        ${({ $color }) => $color && `background: ${$color}`};
        ${({ $blend }) => $blend && `mix-blend-mode: ${$blend}`};
        z-index: inherit;
    }
`;

export const Element = Background;
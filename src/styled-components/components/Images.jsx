import styled from 'styled-components';
import { animated } from '@react-spring/web';


const Image = styled(animated.img)`
    position: relative;
    max-width: ${({$maxWidth}) => $maxWidth ? $maxWidth : '100%'};
    height: ${({$height}) => $height ? $height : 'auto'};
    object-fit: ${({$cover}) => $cover ? 'cover' : 'contain'};
    z-index: ${({$zIndex}) => $zIndex ? $zIndex : 'inherit'};
`;

export default Image;


export const BackgroundImageContainer = styled(animated.div)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${({ $bg }) => $bg ? `background-image: url(${$bg})` : null};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 80%;
    background-color: var(--primaryDark);
    background-blend-mode: luminosity;
    opacity: 0.25;
`;
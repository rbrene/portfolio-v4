import styled from 'styled-components';
import { animated } from '@react-spring/web';


export const BackgroundImage = styled(animated.img)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: inherit;
`;
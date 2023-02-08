import styled from 'styled-components';
import { animated } from '@react-spring/web';


export const ButtonBackground = styled(animated.div)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at bottom right, var(--accent-primary) 0%, #2c94b1 100%);
    z-index: -1;
`;
import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem } from '../../helpers/units';


export const Wrapper = styled(animated.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const Progress = styled(animated.div)`
    position: relative;
    width: clamp(${rem(256)}, 50%, ${rem(480)});
    height: ${rem(3)};
    background: var(--primaryDarkAccent);
    border-radius: ${rem(30)};
    overflow: hidden;
    z-index: inherit;
`;

export const Bar = styled(animated.div)`
    position: relative;
    width: 0%;
    height: 100%;
    background: var(--primaryAccent);
    border-radius: ${rem(30)};
    z-index: inherit;
`;
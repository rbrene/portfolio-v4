import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, em } from '../../helpers/units';


export const Link = styled(animated.a)`
    position: relative;
    width: max-content;
    font-size: clamp(${rem(14)}, 3vw, ${rem(20)});
    font-family: 'Poppins Bold';
    letter-spacing: 0.3ch;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: ${rem(16)};
    color: inherit;
    transform-style: preserve-3d;
    transform-origin: right;
    perspective: 1000px;
    z-index: inherit;

    &:visited,
    &:active {
        color: inherit;
        text-decoration: none;
    }
`;

export const Line = styled(animated.div)`
    position: relative;
    width: clamp(${rem(48)}, 4vw, ${rem(80)});
    height: ${rem(2)};
    border-radius: ${em(7)};
    background-color: var(--primaryLight);
    transform-style: preserve-3d;
    transform-origin: right;
    perspective: 1000px;
    z-index: inherit;
`;

export const Title = styled(animated.span)`
    position: relative;
    z-index: inherit;
`;

export const ProjectLink = styled(animated.a)`
    position: relative;
    font: inherit;
    text-decoration: none;
    color: inherit;
    opacity: 0.5;

    &:hover {
        opacity: 1;
        transition: opacity 500ms ease-in-out;
    }

    &:visited,
    &:active {
        text-decoration: none;
        color: inherit;
    }
`;
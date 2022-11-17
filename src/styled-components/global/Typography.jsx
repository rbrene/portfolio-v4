import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem } from '../../helpers/units';


export const H1 = styled(animated.h1)`
    position: relative;
    width: max-content;
    font-family: 'Bebas';
    font-size: clamp(${rem(64)}, 12vw, ${rem(128)});
    letter-spacing: -0.08ch;
    display: flex;
    flex-direction: column;
    line-height: 1;
    transform-origin: bottom;
    transform-style: preserve-3d;
    perspective: 1000px;
    z-index: inherit;
`;

export const H2 = styled(animated.h2)`
    position: relative;
    width: max-content;
    font-family: 'Bebas';
    font-size: clamp(${rem(64)}, 12vw, ${rem(128)});
    display: flex;
    gap: 0.25ch;
    line-height: 1;
    transform-style: preserve-3d;
    perspective: 1000px;
    z-index: inherit;
`;

export const H3 = styled(animated.h3)`
    position: relative;
    z-index: inherit;
`;

export const H4 = styled(animated.h4)`
    position: relative;
    font-size: ${rem(24)};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${rem(16)};
    z-index: inherit;
`;

export const H5 = styled(animated.h5)`
    position: relative;
    z-index: inherit;
`;

export const H6 = styled(animated.h6)`
    position: relative;
    z-index: inherit;
`;

export const Small = styled(animated.small)`
    position: relative;
    font-size: ${rem(14)};
    z-index: inherit;
`;

export const P = styled(animated.p)`
    position: relative;
    font-size: clamp(${rem(14)}, 4vw, ${rem(18)});
    font-family: 'Poppins Light';
    line-height: 2;
    z-index: inherit;
`;

export const HighLight = styled(animated.span)`
    color: var(--primaryAccent);
    transform-style: preserve-3d;
    perspective: 1000px;
`;

export const Word = styled(animated.span)`
    color: inherit;
    transform-origin: bottom;
    transform-style: preserve-3d;
    perspective: 1000px;
`;

export const SuccessMessage = styled(animated.p)`
    position: relative;
    font-size: clamp(${rem(16)}, 2vw, ${rem(16)});
    font-family: 'Poppins Light';
    line-height: 1.4;
    z-index: inherit;
`;

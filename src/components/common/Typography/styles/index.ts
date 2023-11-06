import styled from 'styled-components';
import { animated } from 'react-spring';
import { unit } from '../../../../helpers';
import { ISCParagraph } from '../types';


export const SCTitle = styled(animated.p)`
    position: relative;
    margin-block: ${unit.em(16)};
    font-size: clamp(${unit.rem(10)}, 2vw, ${unit.rem(14)});
    font-size: clamp(${unit.rem(13)}, 2vw, ${unit.rem(16)});
    font-family: inherit;
    font-weight: 600;
    text-transform: uppercase;
    z-index: inherit;
`;

export const SCH1 = styled(animated.h1)`
    position: relative;
    max-width: 8ch;
    font-size: clamp(${unit.rem(48)}, 5vw, ${unit.rem(96)});
    font-family: var(--font-clash-display), var(--font-poppins);
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1.1;
    z-index: inherit;
`;

export const SCH2 = styled(animated.h2)`
    position: relative;
    font-size: clamp(${unit.rem(32)}, 3vw, ${unit.rem(48)});
    font-family: var(--font-clash-display), var(--font-poppins);
    font-weight: 800;
    text-transform: uppercase;
    line-height: 1.1;
    z-index: inherit;
`;

export const SCH3 = styled(animated.h3)`
    position: relative;
    z-index: inherit;
`;

export const SCH4 = styled(animated.h4)`
    position: relative;
    z-index: inherit;
`;

export const SCH5 = styled(animated.h5)`
    position: relative;
    z-index: inherit;
`;

export const SCH6 = styled(animated.h6)`
    position: relative;
    z-index: inherit;
`;

export const SCP = styled(animated.p) <ISCParagraph>`
    position: relative;
    ${({ $marginblock }) => $marginblock && `margin-block: ${$marginblock}`};
    max-width: ${({ $width }) => $width ? `${$width}ch` : '50ch'};
    font-size: clamp(${unit.rem(12)}, 2vw, ${unit.rem(16)});
    font-family: inherit;
    font-weight: 400;
    ${({ $align }) => $align && `text-align: ${$align}`};
    line-height: 2;
    z-index: inherit;
`;

export const SCEmphasize = styled(animated.span)`
    position: relative;
    color: var(--accent-primary);
    z-index: inherit;
`;
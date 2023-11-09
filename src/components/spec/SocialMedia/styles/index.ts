import { styled } from 'styled-components';
import { animated } from 'react-spring';
import { media, unit } from '../../../../helpers';


const SocialMedia = styled(animated.div)`
    position: fixed;
    inset: 0;
    margin-left: auto;
    max-width: ${unit.rem(48)};
    width: 100%;
    height: 100%;
    z-index: 98;

    @media ${media.desktop.min} {
        max-width: ${unit.rem(64)};
    }

    @media ${media.hd.min} {
        max-width: ${unit.rem(96)};
    }
`;

const Layout = styled(animated.div)`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    gap: ${unit.rem(32)};
    z-index: inherit;
`;

const UL = styled(animated.ul)`
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    gap: ${unit.rem(32)};
    z-index: inherit;
`;

const LI = styled(animated.li)`
    position: relative;
    list-style: none;
    z-index: inherit;
`;

const A = styled(animated.a)`
    position: relative;
    font-size: clamp(${unit.rem(16)}, 2vw, ${unit.rem(24)});
    font-family: inherit;
    font-weight: var(--fw-light);
    text-transform: capitalize;
    text-decoration: none;
    display: flex;
    color: inherit;
    z-index: inherit;

    &:visited,
    &:active {
        text-decoration: none;
        color: inherit;
    }
`;

const Line = styled(animated.div)`
    position: relative;
    width: 1px;
    height: ${unit.rem(96)};
    background-color: hsl(var(--secondary-main-hsl), 0.5);
    transform-origin: bottom;
    z-index: inherit;

    &:nth-child(3) {
        height: ${unit.rem(96)};
        background-color: hsl(var(--secondary-main-hsl), 0.5);
    }
`;

export const Element = { SocialMedia, Layout, UL, LI, A, Line };
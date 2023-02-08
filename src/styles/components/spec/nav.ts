import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem } from '../../../helpers/units';
import { media } from '../../../helpers/mediaQueries';


export const Nav = styled(animated.nav)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 100;
`;

export const NavUL = styled(animated.ul)`
    position: relative;
    width: 100%;
    height: 100%;
    list-style: none;
    z-index: inherit;
`;

export const NavLI = styled(animated.li)`
    position: relative;
    font-size: ${rem(14)};
    font-family: inherit;
    font-variation-settings: 'wght' 500;
    text-transform: uppercase;
    text-align: right;
    letter-spacing: 0.2ch;
    color: var(--light-accent);
    z-index: inherit;
    cursor: default;

    @media ${media.tablet.min} {
        cursor: pointer;
    }
`;
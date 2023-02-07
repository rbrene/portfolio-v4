import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem } from '../../../helpers/units';
import { media } from '../../../helpers/mediaQueries';
import Grid from '../../layouts/grids';


export const Wrapper = styled(animated.div)`
    position: relative;
    margin: auto;
    max-width: ${rem(320)};
    width: 100%;
    height: auto;
    background-color: var(--dark-accent);
    border-radius: ${rem(3)};
    box-shadow: 0px 8px 24px 0px rgba(0 0 0 / 0.2);
    z-index: 1000;

    @media ${media.mobile.min} {
        max-width: ${rem(416)};
    }
`;

export const Layout = styled(Grid)`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
`;

export const SVG = styled(animated.div)`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: var(--dark-accent);
    z-index: inherit;

    svg {
        position: relative;
        width: 50%;
        height: auto;
        opacity: 50%;
        z-index: inherit;
    }
`;

export const Message = styled(animated.p)`
    position: relative;
    font-size: ${rem(14)};
    font-family: inherit;
    font-variation-settings: 'wght' 500;
    text-align: center;
    color: hsl(var(--light-primary-hsl) / 0.6);
    z-index: inherit;

    @media ${media.mobile.min} {
        font-size: ${rem(18)};
    }
`;
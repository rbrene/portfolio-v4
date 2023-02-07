import styled from 'styled-components';
import { animated } from '@react-spring/web';
import Grid from '../../layouts/grids';
import { media } from '../../../helpers/mediaQueries';
import { rem } from '../../../helpers/units';


export const Project = styled(animated.div)`
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--dark-accent);
    border-radius: ${rem(3)};
    z-index: inherit;
`;

export const Header = styled(animated.header)`
    position: relative;
    width: 100%;
    height: auto;
    font-size: ${rem(12)};
    font-family: 'var-karla';
    font-variation-settings: 'wght' 700;
    color: var(--light-accent);
    z-index: inherit;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: ${rem(1)};
        display: block;
        background-color: hsl(var(--light-primary-hsl) / 0.25);
        z-index: inherit;
    }

    @media ${media.mobile.min} {
        font-size: ${rem(14)};
        font-variation-settings: 'wght' 700;
    }
`;

export const Body = styled(animated.article)`
    position: relative;
    width: 100%;
    height: auto;
    z-index: inherit;
`;

export const Footer = styled(animated.footer)`
    position: relative;
    width: 100%;
    height: auto;
    z-index: inherit;
`;

// Layouts

export const Layout = styled(Grid)`
    grid-template-areas: 'header' 'description' 'footer';
    grid-template-columns: 1fr;
    grid-template-rows: 20% 1fr max-content;
    gap: ${rem(8)};

    @media ${media.mobile.min} {
        grid-template-rows: 20% 1fr max-content;
        gap: 0;
    }
`;

export const FooterLayout = styled(Grid)`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr minmax(20%, max-content);
    gap: ${rem(8)};
`;

// Wrappers

export const Tools = styled(animated.div)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export const CTA = styled(animated.div)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

// Elements

export const Description = styled(animated.p)`
    position: relative;
    font-size: ${rem(10)};
    font-family: inherit;
    font-variation-settings: 'wght' 300;
    line-height: 1.6;
    color: hsl(var(--light-primary-hsl) / 0.7);
    z-index: inherit;

    @media ${media.mobile.min} {
        font-size: ${rem(14)};
    }
`;

export const Tool = styled(animated.span)`
    position: relative;
    font-size: ${rem(8)};
    font-family: 'var-karla';
    font-variation-settings: 'wght' 500;
    text-transform: uppercase;
    letter-spacing: 0.1ch;
    color: var(--light-bright);
    opacity: 0.25;
    z-index: inherit;

    @media ${media.mobile.min} {
        font-size: ${rem(10)};
    }
`;
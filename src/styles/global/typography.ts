import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { em, rem } from './../../helpers/units';
import { media } from '../../helpers/mediaQueries';


interface TitleProps {
    $align?: 'left' | 'center' | 'right';
}

export const Title = styled(animated.p) <TitleProps>`
    position: relative;
    margin-bottom: ${em(8)};
    ${({ $align }) => $align === 'right' && `margin-left: auto`};
    max-width: max-content;
    padding-block: ${em(8)};
    font-size: ${rem(8)};
    font-variation-settings: 'wght' 600;
    text-transform: uppercase;
    letter-spacing: ${em(6)};
    color: var(--light-accent);
    z-index: inherit;

    &::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: ${em(4)};
        left: 0;
        width: 100%;
        height: ${em(1)};
        background-color: hsl(var(--light-accent-hsl) / 0.8);
        z-index: inherit;
    }

    @media ${media.mobile.min} {
        font-size: ${rem(12)};
    }
`;

interface H1Props {
    $align?: 'left' | 'center' | 'right';
}

export const H1 = styled(animated.h1) <H1Props>`
    position: relative;
    max-width: 18ch;
    font-size: clamp(${rem(20)}, 5vw, ${rem(40)});
    font-family: 'var-montserrat';
    font-variation-settings: 'wght' 900;
    text-transform: uppercase;
    ${({ $align }) => $align && `text-align: ${$align}`};
    line-height: 1.3;
    z-index: inherit;

    @media ${media.mobile.min} {
        line-height: normal;
    }
`;

interface H2Props {
    $align?: 'left' | 'center' | 'right';
}

export const H2 = styled(animated.h2) <H2Props>`
    position: relative;
    font-size: clamp(${rem(20)}, 5vw, ${rem(48)});
    font-family: 'var-montserrat';
    font-variation-settings: 'wght' 900;
    letter-spacing: 0.1ch;
    text-transform: uppercase;
    line-height: 1;
    ${({ $align }) => $align && `text-align: ${$align}`};
    z-index: inherit;
`;

export const H3 = styled(animated.h3)`
    position: relative;
    z-index: inherit;
`;

export const H4 = styled(animated.h4)`
    position: relative;
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
    z-index: inherit;
`;

interface PProps {
    $width?: {
        mobile: number;
        tablet: number;
    };
    $fontSize?: 'small' | 'normal';
    $align?: 'left' | 'center' | 'right';
    $marginTop?: number;
    $lineHeight?: number;
}

export const P = styled(animated.p) <PProps>`
    position: relative;
    ${({ $width }) => $width && `max-width: ${$width.mobile}ch`};
    margin-top: ${({ $marginTop }) => $marginTop ? `${rem($marginTop)}` : `${rem(8)}`};
    font-size: ${({ $fontSize }) => $fontSize === 'small' ? `clamp(${rem(10)}, 3vw, ${rem(14)})` : `clamp(${rem(12)}, 3vw, ${rem(16)})`};
    font-family: 'var-karla';
    font-variation-settings: 'wght' 200;
    ${({ $align }) => $align && `text-align: ${$align}`};
    letter-spacing: 0.01ch;
    line-height: ${({ $lineHeight }) => $lineHeight ? $lineHeight : 1.2};
    z-index: inherit;

    @media ${media.mobile.min} {
        ${({ $width }) => $width && `max-width: ${$width.tablet}ch`};
    }

`;

import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { media } from '../../../helpers/mediaQueries';
import { rem } from '../../../helpers/units';


const Container = styled(animated.div)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export default Container;

interface Props {
    $top?: number;
    $right?: number;
    $bottom?: number;
    $left?: number;
    $zIndex?: number;
};

export const FixedContainer = styled(animated.div) <Props>`
    position: fixed;
    top: ${({ $top }) => $top ? $top : '0'};
    right: ${({ $right }) => $right ? $right : '0'};
    bottom: ${({ $bottom }) => $bottom ? $bottom : '0'};
    left: ${({ $left }) => $left ? $left : '0'};
    width: 100%;
    height: 100%;
    z-index: ${({ $zIndex }) => $zIndex ? $zIndex : 'inherit'};
`;

export const SVGBackgroundContainer = styled(FixedContainer)`
    mix-blend-mode: soft-light;
`;

interface Props {
    $width?: number | 'max-content';
}

export const SVGContainer = styled(Container) <any>`

    svg {
        position: relative;
        width: 100%;
        height: 100%;
        fill: hsl(var(--light-accent-hsl) / 0.15);
        z-index: inherit;
    }

    @media ${media.mobile.max} {
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            max-width: calc(100% - ${rem(32)});
        }
    }
`;

export const CallToAction = styled(animated.div)`
    position: relative;
    width: auto;
    height: auto;
    margin-top: ${rem(24)};
    z-index: inherit;
`;
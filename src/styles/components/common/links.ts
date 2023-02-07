import styled from 'styled-components';
import { Link as L } from 'react-router-dom';
import { animated } from '@react-spring/web';
import { rem } from '../../../helpers/units';
import { media } from '../../../helpers/mediaQueries';


export const Link = styled(animated.a)`
    position: relative;
    font-size: ${rem(8)};
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.2ch;
    color: var(--light-accent);
    z-index: inherit;

    &:visited,
    &:active {
        text-decoration: none;
        color: var(--light-accent);
    }

    @media ${media.mobile.min} {
        font-size: ${rem(10)};
    }
`;

export const RouterLink = styled(L)`
    position: relative;
    text-decoration: none;
    color: var(--light-accent);
    z-index: inherit;

    &:visited,
    &:active {
        text-decoration: none;
        color: var(--light-accent);
    }
`;
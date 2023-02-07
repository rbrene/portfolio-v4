import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { em, rem } from '../../../helpers/units';
import { media } from '../../../helpers/mediaQueries';


const Btn = styled(animated.button)`
    position: relative;
    padding: ${em(16)} ${em(32)};
    font-size: ${rem(8)};
    font-family: inherit;
    font-variation-settings: 'wght' 400;
    text-transform: uppercase;
    letter-spacing: 0.2ch;
    border-style: solid;
    border-width: 1px;
    border-radius: ${em(3)};
    z-index: inherit;
    cursor: default;

    @media ${media.mobile.min} {
        font-size: ${rem(12)};
    }

    @media ${media.tablet.min} {
        cursor: pointer;
    }
`;

export const PrimaryButton = styled(Btn)`
    border-color: var(--accent-primary);
    background: radial-gradient(circle at bottom right, var(--accent-primary) 0%, #2c94b1 100%);
    color: var(--light-primary);
`;

export const SecondaryButton = styled(Btn)`
    border-color: var(--accent-primary);
    background: transparent;
    color: var(--accent-primary);
`;
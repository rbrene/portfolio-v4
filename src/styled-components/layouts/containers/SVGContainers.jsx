import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { min } from '../../../helpers/units';


export const HomeSVGContainer = styled(animated.div)`
    position: absolute;
    max-width: max-content;
    width: 100%;
    height: 100%;
    z-index: 1;

    svg {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: inherit;
    }

    ${min('mobile')} {
        position: relative;
    }
`;

export const AboutSVGContainer = styled(animated.div)`
    position: absolute;
    right: 0;
    max-width: max-content;
    width: 100%;
    height: 100%;
    z-index: 1;

    svg {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: inherit;
    }

    ${min('mobile')} {
        position: relative;
    }
`;

export const PortfolioContainer = styled(animated.div)`
    position: absolute;
    left: 0;
    max-width: max-content;
    width: 100%;
    height: 100vh;
    z-index: 1;

    svg {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: inherit;
    }

    ${min('mobile')} {
        position: relative;
    }
`;

export const ContactSVGContainer = styled(animated.div)`
    position: absolute;
    right: 0;
    max-width: max-content;
    width: 100%;
    height: 100%;
    z-index: 1;

    svg {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: inherit;
    }

    ${min('mobile')} {
        position: relative;
    }
`;
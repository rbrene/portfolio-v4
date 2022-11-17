import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, min } from '../../../helpers/units';


const Container = styled(animated.div)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export default Container;


export const HomeTextContainer = styled(animated.div)`
    position: relative;
    left: ${rem(89.8333)};
    margin-top: auto;
    width: max-content;
    height: max-content;
    display: flex;
    flex-flow: column nowrap;
    gap: ${rem(16)};
    z-index: inherit;

    ${min('mobile')} {
        left: 0;
    }
`;

export const AboutTextContainer = styled(animated.div)`
    position: relative;
    max-width: ${rem(480)};
    width: 100%;
    height: max-content;
    display: flex;
    flex-flow: column nowrap;
    gap: ${rem(16)};
    z-index: inherit;

    h2 {
        margin-bottom: ${rem(32)};
    }
    
    a {
        margin-top: ${rem(48)};
    }
`;


export const PortfolioContainer = styled(animated.div)`
    position: relative;
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: ${rem(16)};
    z-index: inherit;
`;

export const ProjectsContainer = styled(animated.div)`
    position: relative;
    max-width: ${rem(840)};
    height: auto;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: max-content;
    gap: ${rem(32)};
    z-index: inherit;

    ${min('tablet')} {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        padding: 0;
    }
`;

export const ContactContainer = styled(animated.div)`
    position: relative;
    max-width: 100%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    z-index: inherit;

    ${min('mobile')} {
        max-width: ${rem(720)};
        width: 100%;
    }
`;


export const FormContainer = styled(animated.div)`
    position: relative;
    width: 100%;
    height: 100%;
    margin-block: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    z-index: inherit;
`;


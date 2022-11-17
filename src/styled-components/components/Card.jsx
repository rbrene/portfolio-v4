import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, min } from '../../helpers/units';


export const Project = styled(animated.div)`
    position: relative;
    max-width: ${rem(400)};
    width: 100%;
    height: auto;
    padding: ${rem(32)};
    display: grid;
    gap: ${rem(16)};
    background: var(--primaryDarkAccent);
    z-index: inherit;

    ${min('tablet')} {
        max-width: ${rem(480)};
        height: ${rem(350)};
    }
`;

export const Header = styled(animated.header)`
    display: grid;
    gap: ${rem(16)};
`;

export const CTA = styled(animated.div)`
    font-size: clamp(${rem(16)}, 3vw, ${rem(20)});
    display: flex;
    align-items: flex-end;
    gap: ${rem(16)};
`;

export const Title = styled(animated.div)`
    position: relative;
    font-size: clamp(${rem(14)}, 3vw, ${rem(18)});
    font-family: 'Poppins SemiBold';
    letter-spacing: 0.05ch;
    display: flex;
    color: var(--primaryLightAccent);
    line-height: 1.3;
    z-index: inherit;
`;

export const Content = styled(animated.article)`
    font-size: clamp(${rem(12)}, 2vw, ${rem(14)});
    font-family: 'Poppins Light';
    line-height: 2;
`;

export const Footer = styled(animated.footer)`
    font-size: clamp(${rem(10)}, 2vw, ${rem(12)});
    font-family: 'Poppins Light';
    text-transform: uppercase;
    letter-spacing: 0.2ch;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: ${rem(8)};
    color: var(--primaryLightAccent);

    span {
        opacity: 0.5;
    }

`;
import { styled } from 'styled-components';
import { animated } from 'react-spring';
import { unit } from '../../../../helpers';


const Loader = styled(animated.div)`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary-main);
    color: var(--secondary-minor);
    z-index: 999;
`;

const Loading = styled(animated.div)`
    position: relative;
    font-size: clamp(${unit.rem(14)}, 3vw, ${unit.rem(16)});
    font-family: var(--font-poppins);
    font-weight: 300;
    line-height: 1.1;
    opacity: 1;
    z-index: inherit;
`;

const Progress = styled(animated.div)`
    position: relative;
    max-width: ${unit.rem(256)};
    width: 100%;
    height: 1px;
    outline: 1px solid hsl(var(--accent-primary-dark-hsl), 0.05);
    border-radius: ${unit.rem(32)};
    background-color: var(--secondary-main);
    z-index: inherit;
`;

const ProgressBar = styled(animated.div)`
    position: relative;
    width: 0%;
    height: 100%;
    border-radius: ${unit.rem(32)};
    background: var(--accent-main);
    z-index: inherit;
`;

export const Element = {
    Loader,
    Loading,
    Progress,
    ProgressBar,
};
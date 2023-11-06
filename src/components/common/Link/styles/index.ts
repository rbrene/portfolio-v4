import { styled } from 'styled-components';
import { animated } from 'react-spring';
import { unit } from '../../../../helpers';


const A = styled(animated.a)`
    position: relative;
    font-size: clamp(${unit.rem(13)}, 2vw, ${unit.rem(16)});
    font-family: inherit;
    font-weight: var(--fw-bold);
    text-transform: uppercase;
    text-decoration: none;
    display: block;
    border: none;
    border-radius: ${unit.rem(3)};
    background: linear-gradient(to bottom right, var(--accent-primary) 0%, var(--accent-main) 100%);
    background-size: 200%;
    background-position: center center;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    z-index: inherit;

    &:visited,
    &:active {
        text-decoration: none;
        color: transparent;
    }
`;

export const Element = { A };
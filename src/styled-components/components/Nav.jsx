import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, em, min } from '../../helpers/units';


export const Nav = styled(animated.nav)`
    position: relative;
    width: max-content;
    height: max-content;
    
    z-index: 100;
`;

export const List = styled(animated.ul)`
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    gap: ${em(16)};
    list-style: none;
    z-index: inherit;
`;

export const ListItem = styled(animated.li)`
    position: relative;
    width: max-content;
    height: max-content;
    font-size: clamp(${rem(14)}, 2vw, ${rem(18)});
    font-family: 'Poppins SemiBold';
    text-transform: uppercase;
    text-align: right;
    transform-origin: right;
    transform-style: preserve-3d;
    transform-origin: right;
    perspective: 1000px;
    opacity: 0.8;
    z-index: inherit;
`;

export const Link = styled(animated.a)`
    position: relative;
    width: max-content;
    font: inherit;
    text-decoration: none;
    color: inherit;
    z-index: inherit;
    cursor: default;

    &:visited,
    &:active {
        color: inherit;
        text-decoration: none;
    }

    ${min('tablet')} {
        cursor: pointer;
    }
`;
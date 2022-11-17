import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, em } from '../../helpers/units';


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
    opacity: 0.8;
    z-index: inherit;
`;
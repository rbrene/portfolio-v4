import styled from 'styled-components';
import { animated } from 'react-spring';
import { ISCSection } from '../types';


export const SCSection = styled(animated.section) <ISCSection>`
    position: relative;
    width: 100%;
    height: 100%;
    ${({ $background }) => $background && `background: ${$background}`};
    ${({ $color }) => $color && `color: ${$color}`};
    z-index: inherit;
`;

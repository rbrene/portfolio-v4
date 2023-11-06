import styled from 'styled-components';
import { animated } from 'react-spring';
import { ISCContainer } from '../types';
import { unit } from '../../../../helpers';


export const SCContainer = styled(animated.div) <ISCContainer>`
    position: ${({ $position }) => $position !== undefined ? $position : 'relative'};
    ${({ $inset, $position, $top, $right, $bottom, $left }) => ($position !== 'relative' || undefined) && $top === undefined && $right === undefined && $bottom === undefined && $left === undefined && $inset !== undefined ? `inset: ${$inset}` : 'inset: 0'};
    max-width: ${({ $width }) => $width !== undefined ? `${unit.rem($width)}` : '100%'};
    ${({ $inset, $position }) => (($position !== 'relative' || undefined) && $inset) && `inset: ${$inset}`};
    ${({ $top, $position }) => (($position !== 'relative' || undefined) && $top) && `top: ${unit.rem($top!)}`};
    ${({ $right, $position }) => (($position !== 'relative' || undefined) && $right) && `right: ${unit.rem($right!)}`};
    ${({ $bottom, $position }) => (($position !== 'relative' || undefined) && $bottom) && `bottom: ${unit.rem($bottom!)}`};
    ${({ $left, $position }) => (($position !== 'relative' || undefined) && $left) && `left: ${unit.rem($left!)}`};
    width: 100%;
    height: 100%;
    ${({ $background }) => $background !== undefined && `background: ${$background}`};
    ${({ $color }) => $color !== undefined && `color: ${$color}`};
    z-index: ${({ $zindex }) => $zindex !== undefined ? $zindex : 'inherit'};
`;

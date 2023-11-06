import styled from 'styled-components';
import { animated } from 'react-spring';
import { IBorderColor } from './types';
import unit from '../../../helpers/units';


const BTop = styled(animated.div) <IBorderColor>`
    position: absolute;
    top: 0;
    width: 100%;
    height: ${unit.rem(1)};
    background-color: ${({ $color }) => $color ? $color : 'rgb(252, 252, 252, 0.5)'};
    z-index: inherit;
`;

const BRight = styled(animated.div) <IBorderColor>`
    position: absolute;
    right: 0;
    width: ${unit.rem(1)};
    height: 100%;
    background-color: ${({ $color }) => $color ? $color : 'rgb(252, 252, 252, 0.5)'};
    z-index: inherit;
`;

const BBottom = styled(animated.div) <IBorderColor>`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${unit.rem(1)};
    background-color: ${({ $color }) => $color ? $color : 'rgb(252, 252, 252, 0.5)'};
    z-index: inherit;
`;

const BLeft = styled(animated.div) <IBorderColor>`
    position: absolute;
    left: 0;
    width: ${unit.rem(1)};
    height: 100%;
    background-color: ${({ $color }) => $color ? $color : 'rgb(252, 252, 252, 0.5)'};
    z-index: inherit;
`;

const Element = {
    Top: BTop,
    Right: BRight,
    Bottom: BBottom,
    Left: BLeft
};

export default Element;
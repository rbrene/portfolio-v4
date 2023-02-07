import styled from 'styled-components';
import { em } from '../../../helpers/units';
import Container from '../containers/index';

type DirectionPropType = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type FlexWrapPropType = 'wrap' | 'nowrap';


interface Props {
    $gap?: number;
    $direction?: DirectionPropType;
    $wrap?: FlexWrapPropType;
}

const Flex = styled(Container) <Props>`
    display: flex;
    ${({ $gap }) => $gap && `gap: ${em($gap)}`};
    ${({ $direction }) => $direction && `flex-direction: ${$direction}`};
    ${({ $wrap }) => $wrap && `flex-wrap: ${$wrap}`};
`;

export default Flex;

export const FlexColumn = styled(Flex)`
    flex-direction: column;
`;

export const FlexCenter = styled(FlexColumn)`
    align-items: center;
    justify-content: center;
`;

interface AlignProps {
    $direction?: string;
    $alignItems?: 'start' | 'center' | 'end' | string;
    $justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-evenly' | 'space-around';
}

export const FlexAlign = styled(Flex) <AlignProps>`
    flex-direction: ${({ $direction }) => $direction ? $direction : 'row'};
    align-items: ${({ $alignItems }) => $alignItems ? $alignItems : 'center'};
    ${({ $justifyContent }) => $justifyContent && `justify-content: ${$justifyContent}`}
`;
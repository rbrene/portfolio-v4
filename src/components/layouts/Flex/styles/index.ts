import styled from 'styled-components';
import { ISCFlexCenterProps, ISCFlexProps } from '../types';
import unit from '../../../../helpers/units';
import { Wrapper } from '../../../styles/utilities';


const Flex = styled(Wrapper.Relative) <ISCFlexProps>`
    display: flex;
    ${({ $direction }) => $direction !== undefined && `flex-direction: ${$direction}`};
    ${({ $wrap }) => $wrap !== undefined && `flex-wrap: ${$wrap}`};
    ${({ $alignitems }) => $alignitems !== undefined && `align-items: ${$alignitems}`};
    ${({ $justifycontent }) => $justifycontent !== undefined && `justify-content: ${$justifycontent}`};
    ${({ $gap }) => $gap !== undefined && `gap: ${unit.rem($gap)}`};
`;

const InlineFlex = styled(Wrapper.Relative) <ISCFlexProps>`
    display: inline-flex;
    ${({ $direction }) => $direction !== undefined && `flex-direction: ${$direction}`};
    ${({ $wrap }) => $wrap !== undefined && `flex-wrap: ${$wrap}`};
    ${({ $alignitems }) => $alignitems !== undefined && `align-items: ${$alignitems}`};
    ${({ $justifycontent }) => $justifycontent !== undefined && `justify-content: ${$justifycontent}`};
    ${({ $gap }) => $gap !== undefined && `gap: ${unit.rem($gap)}`};
`;

const FlexCenter = styled(Wrapper.Relative) <ISCFlexCenterProps>`
    display: flex;
    flex-direction: ${({ $direction }) => $direction !== undefined ? $direction : 'column'};
    ${({ $gap }) => $gap !== undefined && `gap: ${unit.rem($gap)}`};
    align-items: center;
    justify-content: center;
`;

const Element = { Flex, InlineFlex, FlexCenter }

export default Element;
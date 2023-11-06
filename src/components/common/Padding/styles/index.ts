import styled from 'styled-components';
import { ISCPadding } from '../types';
import { Wrapper } from '../../../styles/utilities';


export const SCPadding = styled(Wrapper.Relative) <ISCPadding>`
    padding: ${({ $padding }) => $padding && $padding};
`;

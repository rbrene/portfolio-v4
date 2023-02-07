import styled from 'styled-components';
import { FixedContainer } from '../../layouts/containers';
import { FlexCenter } from '../../layouts/flex';
import { rem } from '../../../helpers/units';


export const Modal = styled(FixedContainer)``;

export const Backdrop = styled(FlexCenter)`
    backdrop-filter: blur(${rem(7)});
`;
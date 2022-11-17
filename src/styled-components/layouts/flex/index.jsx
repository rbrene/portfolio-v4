import styled from 'styled-components';
import Container from '../containers/index';


const Flex = styled(Container)`
    display: flex;
`;

export default Flex;

export const FlexColumn = styled(Flex)`
    flex-direction: column;
`;

export const FlexCenter = styled(FlexColumn)`
    align-items: center;
    justify-content: center;
`;
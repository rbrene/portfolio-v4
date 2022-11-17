import styled from 'styled-components';
import Flex from './index';
import { rem, min } from '../../../helpers/units';


const PortfolioFlexContainer = styled(Flex)`

    ${min('mobile')} {
        gap: ${rem(16)};
    }
`;

export default PortfolioFlexContainer;

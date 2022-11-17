import styled from 'styled-components';
import Flex from './index';
import { rem, min } from '../../../helpers/units';


const AboutFlexLayout = styled(Flex)`
    justify-content: space-between;
    ${min('mobile')} {
        gap: ${rem(16)};
    }
`;

export default AboutFlexLayout;

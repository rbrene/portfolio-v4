import styled from 'styled-components';
import Flex from './index';
import { rem, min } from '../../../helpers/units';


const HomeFlexLayout = styled(Flex)`

    ${min('mobile')} {
        gap: ${rem(16)};
    }
`;

export default HomeFlexLayout;

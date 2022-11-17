import styled from 'styled-components';
import Flex from './index';
import { rem, min } from '../../../helpers/units';


const ContactFlexLayout = styled(Flex)`
    justify-content: space-between;
    ${min('mobile')} {
        gap: ${rem(16)};
    }
`;

export default ContactFlexLayout;
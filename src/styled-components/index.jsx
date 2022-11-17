import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, min } from '../helpers/units';


export const Main = styled(animated.main)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

export const Section = styled(animated.section)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
`;

export const Header = styled(animated.header)`
    position: absolute;
    top: 0;
    right: 0;
    width: max-content;
    height: max-content;
    margin-top: ${rem(32)};
    margin-right: ${rem(32)};
    z-index: 99;

    ${min('mobile')} {
        margin-top: ${rem(64)};
        margin-right: ${rem(64)};
    }
`;
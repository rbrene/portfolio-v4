import styled from 'styled-components';
import { animated } from 'react-spring';


const Relative = styled(animated.div)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

const Absolute = styled(animated.div)`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

const Fixed = styled(animated.div)`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

const Element = { Relative, Absolute, Fixed };

export default Element;
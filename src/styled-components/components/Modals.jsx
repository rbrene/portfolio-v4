import styled from 'styled-components';
import { animated } from '@react-spring/web';
import Container from '../layouts/containers/index';


export const Modal = styled(animated.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

export const Backdrop = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
`;
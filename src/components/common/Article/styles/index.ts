import { ISCArticle } from './../types/index';
import styled from 'styled-components';
import { animated } from 'react-spring';


export const SCArticle = styled(animated.article) <ISCArticle>`
    position: relative;
    ${({ $width }) => $width !== undefined && `max-width: ${$width}; width: 100%`};
    ${({ $height }) => $height !== undefined ? `height: ${$height}` : 'height: auto'};
    z-index: inherit;
`;
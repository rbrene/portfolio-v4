import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem } from '../../../helpers/units';
import Container from '../../layouts/containers';


export const Wrapper = styled(Container)`
    max-width: ${rem(80)};

    &>*{
    }
`;

export const Dot = styled(animated.div)`
    position: relative;
    min-width: ${rem(24)};
    max-height: ${rem(24)};
    width: 100%;
    height: 100%;
    background-color: var(--accent-bright);
    border-radius: 50%;
    z-index: inherit;
    &:not(:first-child, :last-child) {
        margin-inline: ${rem(8)};
    }
`;
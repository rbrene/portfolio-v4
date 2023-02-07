import styled from 'styled-components';
import { rem } from '../../helpers/units';
import Container from '../layouts/containers';


interface Props {
    $padding?: number;
}

export const Padding = styled(Container) <Props>`
    padding: ${({ $padding }) => $padding ? rem($padding) : $padding === 0 ? rem(0) : `${rem(16)}`};
`;

interface Props {
    $inline?: number;
}

export const PaddingInline = styled(Container) <Props>`
    padding-inline: ${({ $inline }) => $inline ? rem($inline) : $inline === 0 ? rem(0) : `${rem(16)}`};
`;

interface Props {
    $block?: number;
}

export const PaddingBlock = styled(Container) <Props>`
    padding-block: ${({ $block }) => $block ? rem($block) : $block === 0 ? rem(0) : `${rem(16)}`};
`;

interface Props {
    $block?: number;
    $inline?: number;
}

export const PaddingCustom = styled(Container) <Props>`
    padding-block: ${({ $block }) => $block ? rem($block) : $block === 0 ? rem(0) : `${rem(16)}`};
    padding-inline: ${({ $inline }) => $inline ? rem($inline) : $inline === 0 ? rem(0) : `${rem(16)}`};
`;
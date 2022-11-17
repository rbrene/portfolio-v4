import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, em, min } from '../../helpers/units';


const Button = styled(animated.button)`
    position: relative;
    z-index: inherit;

    ${min('tablet')} {
        cursor: pointer;
    }

`;

export default Button;

export const Submit = styled(Button)`
    padding-inline: ${em(16)};
    padding-block: clamp(${em(16)}, 3vw, ${em(24)});
    font-size: clamp(${rem(12)}, 2vw, ${rem(14)});
    font-size: clamp(${rem(8)}, 2vw, ${rem(12)});
    font-family: 'Poppins SemiBold';
    text-transform: uppercase;
    letter-spacing: 0.5ch;
    border: 1px solid var(--primaryButton);
    background: var(--primaryButton);
    color: var(--primaryButtonAccent);
    transition: filter 250ms ease-in-out;

    &:hover {
        filter: brightness(120%);
    }

    ${min('mobile')} {
        width: max-content;
        padding-inline: ${rem(32)};
    }
`;

export const SuccessButton = styled(Button)`
    padding: ${rem(8)};
    font-size: clamp(${rem(14)}, 2vw, ${rem(16)});
    font-family: 'Poppins Bold';
    text-transform: uppercase;
    letter-spacing: 0.25ch;
    border: 1px solid var(--primaryButton);
    background: var(--primaryButton);
    color: var(--primaryButtonAccent);
    transition: filter 250ms ease-in-out;

    &:hover {
        filter: brightness(120%);
    }

`;
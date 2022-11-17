import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, em, min } from '../../helpers/units';


const Button = styled(animated.button)`
    position: relative;
    font: inherit;
    z-index: inherit;
`;

export default Button;

export const Submit = styled(Button)`
    padding: ${em(16)};
    font-size: clamp(${rem(12)}, 2vw, ${rem(14)});
    font-family: 'Poppins SemiBold';
    text-transform: uppercase;
    letter-spacing: 0.5ch;
    border: 1px solid var(--primaryButton);
    background: var(--primaryButton);
    color: var(--primaryButtonAccent);

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
`;
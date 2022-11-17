import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, em, min } from '../../helpers/units';


export const Form = styled(animated.form)`
    position: relative;
    width: 100%;
    height: auto;
    padding: ${rem(16)};
    background: var(--primaryDarkAccent);
    z-index: inherit;

    ${min('mobile')} {
        padding: ${rem(32)};
    }
`;

export const FormField = styled(animated.fieldset)`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: none;
    gap: ${rem(8)};
    
    ${min('mobile')} {
        &:nth-child(1) {
            grid-area: fullName;
        }

        &:nth-child(2) {
            grid-area: email;
        }

        &:nth-child(3) {
            grid-area: subject;
        }

        &:nth-child(4) {
            grid-area: message;
        }

        &:nth-child(5) {
            grid-area: submit;
        }
    }
`;

export const Legend = styled(animated.legend)`
    position: relative;
    z-index: inherit;
`;

export const Label = styled(animated.label)`
    position: relative;
    font-size: ${rem(12)};
    font-family: 'Poppins SemiBold';
    letter-spacing: 0.2ch;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: ${rem(16)};
    opacity: 0.75;
    z-index: inherit;
`;

export const Error = styled(animated.small)`
    font-size: ${rem(8)};
    font-family: 'Poppins Bold';
    color: #ff588a;
`;

export const Input = styled(animated.input)`
    position: relative;
    padding: ${em(4)} ${em(8)};
    font-size: ${rem(14)};
    font-family: 'Poppins Regular';
    border: none;
    outline: none;
    border-bottom: 2px solid hsl(var(--primaryLightHsl) / 0.25);
    background: transparent;
    color: inherit;
    z-index: inherit;
    transition: border-bottom 500ms ease-in-out;

    &:focus,
    &:active {
        border-bottom: 2px solid #00ffc8;
    }

    &[data-error=true] {
        border-bottom: 2px solid #ff004c;
    }
`;

export const Textarea = styled(animated.textarea)`
    position: relative;
    width: 100%;
    height: ${rem(96)};
    padding: ${em(4)} ${em(8)};
    font-size: ${rem(14)};
    font-family: 'Poppins Regular';
    outline: none;
    border: none;
    border-bottom: 2px solid hsl(var(--primaryLightHsl) / 0.25);
    background: transparent;
    color: inherit;
    z-index: inherit;
    resize: none;
    transition: border-bottom 250ms ease-in-out;

    &:focus,
    &:active {
        border-bottom: 2px solid #00ffc8;
    }
    &[data-error=true] {
        border-bottom: 2px solid #ff004c;
    }
`;

export const Success = styled(animated.div)`
    position: relative;
    max-width: ${rem(256)};
    width: 100%;
    height: auto;
    padding: ${rem(32)};
    display: flex;
    flex-flow: column nowrap;
    gap: ${rem(16)};
    justify-content: center;
    text-align: center;
    background: var(--primaryDarkAccent);
    transform-origin: bottom;
    transform-style: preserve-3d;
    perspective: 1000px;
    z-index: inherit;
`;
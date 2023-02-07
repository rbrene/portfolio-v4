import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { em, rem } from '../../../helpers/units';
import { media } from '../../../helpers/mediaQueries';


export const Form = styled(animated.form)`
    position: relative;
    margin-top: ${rem(16)};
    width: 100%;
    z-index: inherit;
`;

export const Field = styled(animated.fieldset)`
    position: relative;
    border: none;
    z-index: inherit;

    @media ${media.mobile.max} {
        button[type='submit'] {
            width: 100%;
        }
    }
`;

export const Label = styled(animated.label)`
    position: relative;
    font-size: ${rem(10)};
    font-family: inherit;
    font-variation-settings: 'wght' 500;
    text-transform: uppercase;
    letter-spacing: 0.2ch;
    display: flex;
    align-items: center;
    gap: ${rem(8)};
    z-index: inherit;

    &:not(small) {
        color: hsl(var(--light-accent-hsl) / 0.6);
    }

    @media ${media.mobile.min} {
        font-size: ${rem(12)};
    }
`;

export const Input = styled(animated.input)`
    position: relative;
    width: 100%;
    padding: ${em(8)};
    font-size: ${rem(12)};
    font-family: inherit;
    outline: none;
    border: none;
    border-radius: ${rem(3)};
    background-color: hsl(var(--dark-accent-hsl) / 0.75);
    color: var(--light-accent);
    z-index: inherit;

    @media ${media.mobile.min} {
        font-size: ${rem(14)};
    }
`;

export const Textarea = styled(animated.textarea)`
    position: relative;
    width: 100%;
    padding: ${em(8)};
    font-size: ${rem(12)};
    font-family: inherit;
    outline: none;
    border: none;
    border-radius: ${rem(3)};
    background-color: hsl(var(--dark-accent-hsl) / 0.8);
    color: var(--light-accent);
    z-index: inherit;
    resize: none;

    @media ${media.mobile.min} {
        font-size: ${rem(14)};
    }
`;

export const Error = styled(animated.small)`
    position: relative;
    font-size: ${rem(8)};
    font-variation-settings: 'wght' 800;
    color: #ff6e9a;
    z-index: inherit;
`;
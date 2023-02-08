import React from 'react';
import { DefaultButtonProps, PrimaryButtonProps, SecondaryButtonProps, SubmitButtonProps } from '../../../types/components/buttons';
import { PrimaryButton, SecondaryButton } from '../../../styles/components/common/buttons';
import { ButtonBackground } from '../../../styles/utilities';
import { useHover } from '../../../hooks/useHover';
import { useSpring } from '@react-spring/web';


export const Primary: React.FC<PrimaryButtonProps> = ({ type, onClick, children }) => {
    const { hover, mouseEnter, mouseLeave } = useHover();

    const background = useSpring({
        to: {
            scale: hover ? 2 : 1,
            transformOrigin: 'left'
        }
    });

    const scale = useSpring({
        to: {
            scale: hover ? 0.98 : 1
        }
    })

    return (
        <PrimaryButton
            type={type ? type : 'button'}
            onClick={onClick}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            style={scale}
        >
            <ButtonBackground
                style={background}
            />
            {children}
        </PrimaryButton>
    )
};

export const Secondary: React.FC<SecondaryButtonProps> = ({ type, onClick, children }) => {
    return (
        <SecondaryButton
            type={type ? type : 'button'}
            onClick={onClick}
        >
            {children}
        </SecondaryButton>
    );
};

export const Submit: React.FC<SubmitButtonProps> = ({ children }) => {
    return (
        <PrimaryButton
            type='submit'
        >
            {children}
        </PrimaryButton>
    )
}

export const Button: React.FC<DefaultButtonProps> = ({ variant, type, onClick, children }) => {
    switch (variant) {
        case 'primary':
            return <Primary type={type} children={children} onClick={onClick} />;
        case 'secondary':
            return <Secondary type={type} children={children} onClick={onClick} />;
        case 'submit':
            return <Primary type={type} children={children} onClick={onClick} />;
        default:
            throw new Error(`'variant' prop has not been defined.`);
    };
}
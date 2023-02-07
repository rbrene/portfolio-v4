import React from 'react';
import { DefaultButtonProps, PrimaryButtonProps, SecondaryButtonProps, SubmitButtonProps } from '../../../types/components/buttons';
import { PrimaryButton, SecondaryButton } from '../../../styles/components/common/buttons';


export const Primary: React.FC<PrimaryButtonProps> = ({ type, onClick, children }) => {
    return (
        <PrimaryButton
            type={type ? type : 'button'}
            onClick={onClick}
        >
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
        default:
            throw new Error(`'variant' prop has not been defined.`);
    };
}
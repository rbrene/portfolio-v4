import React from 'react';
import { DefaultButtonProps, PrimaryButtonProps, SecondaryButtonProps, SubmitButtonProps } from '../../../types/components/buttons';
import { PrimaryButton, SecondaryButton } from '../../../styles/components/common/buttons';
import { ButtonBackground } from '../../../styles/utilities';
import { useHover } from '../../../hooks/useHover';
import { useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';


export const Primary: React.FC<PrimaryButtonProps> = ({ type, onClick, children }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const { hover, mouseEnter, mouseLeave } = useHover();

    const background = useSpring({
        to: {
            scale: hover ? 2 : 1,
            transformOrigin: 'left'
        }
    });

    const scale = useSpring({
        to: {
            scale: hover ? 0.98 : 1,
            rotateX: inView ? '0deg' : '90deg'
        },
        config: {
            mass: 5,
            tension: 350,
            friction: 40,
        }
    });

    return (
        <PrimaryButton
            type={type ? type : 'button'}
            onClick={onClick}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            style={scale}
            ref={ref}
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
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const { hover, mouseEnter, mouseLeave } = useHover();

    const background = useSpring({
        to: {
            scale: hover ? 2 : 1,
            transformOrigin: 'left'
        }
    });

    const scale = useSpring({
        to: {
            scale: hover ? 0.98 : 1,
            rotateX: inView ? '0deg' : '90deg'
        },
        config: {
            mass: 5,
            tension: 350,
            friction: 40,
        }
    });
    return (
        <PrimaryButton
            type='submit'
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            style={scale}
            ref={ref}
        >
            <ButtonBackground
                style={background}
            />
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
            return <Submit children={children} />;
        default:
            throw new Error(`'variant' prop has not been defined.`);
    };
}
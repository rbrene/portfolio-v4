import { useSpring } from '@react-spring/web';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Title as TitleElement, H1 as H1Element, H2 as H2Element } from '../../../styles/global/typography';
import { HeadingComponentProps, HeadingProps } from '../../../types/components/headings';


export const Title: React.FC<HeadingProps> = ({ children }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const spring = useSpring({
        to: {
            opacity: inView ? 1 : 0,
            x: inView ? 0 : 16
        }
    })

    return <TitleElement children={children} ref={ref} style={spring} />;
};

export const H1: React.FC<HeadingProps> = ({ children }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const spring = useSpring({
        to: {
            opacity: inView ? 1 : 0,
            x: inView ? 0 : 16
        },
        delay: 200
    });
    return <H1Element children={children} ref={ref} style={spring} />;
};

export const H2: React.FC<HeadingProps> = ({ children }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const spring = useSpring({
        to: {
            opacity: inView ? 1 : 0,
            x: inView ? 0 : 16
        },
        delay: 200
    });
    return <H2Element children={children} ref={ref} style={spring} />;
};

export const Heading: React.FC<HeadingComponentProps> = ({ size, children }) => {
    switch (size) {
        case 'title':
            return <Title children={children} />;
        case 'h1':
            return <H1 children={children} />;
        case 'h2':
            return <H2 children={children} />;
        default:
            throw new Error(`'size' prop not defined for 'heading' component`)
    }
}
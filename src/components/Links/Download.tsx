import React from 'react';
import { LinkPropsTypes } from '../../interfaces/interfaces';
import { Link as Wrapper, Line, Title } from '../../styled-components/components/Links';
import { useInView } from 'react-intersection-observer';
import { useSpring } from '@react-spring/web';


const Download = ({ url, title }: LinkPropsTypes) => {

    const { ref, entry } = useInView({
        threshold: 1
    })

    const lineSpring = useSpring({
        to: {
            scaleX: entry?.isIntersecting ? 1 : 0,
            opacity: entry?.isIntersecting ? 0.5 : 0,
        },
        delay: entry?.isIntersecting ? 1000 : 0,
    })

    const titleSpring = useSpring({
        to: {
            x: entry?.isIntersecting ? 0 : -32,
            opacity: entry?.isIntersecting ? 0.5 : 0
        },
        delay: entry?.isIntersecting ? 1000 : 0,
    })

    return (
        <Wrapper href={url} download>
            <Line ref={ref} style={lineSpring} />
            <Title ref={ref} style={titleSpring}>{title}</Title>
        </Wrapper>
    )
};


export default Download;
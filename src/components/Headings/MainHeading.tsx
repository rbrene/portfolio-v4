import React from 'react';
import { MainHeadingProps } from '../../interfaces/interfaces';
import { H1, HighLight, Word } from '../../styled-components/global/Typography';
import { useInView } from 'react-intersection-observer';
import { useSpring, useTrail } from '@react-spring/web';


const MainHeading = ({ word, highlight }: MainHeadingProps) => {
    const { ref, entry } = useInView({
        threshold: 1
    });

    const spring = useSpring({
        to: {
            opacity: entry?.isIntersecting ? 1 : 0,
            transformOrigin: entry?.isIntersecting ? 'top' : 'bottom',
            y: entry?.isIntersecting ? 0 : 32,
            rotateX: entry?.isIntersecting ? '0deg' : '90deg'
        },
        delay: entry?.isIntersecting ? 1000 : 0,
        config: {
            mass: 5,
            tension: 350,
            friction: 40            
        }
    })

    const trail = useTrail(highlight.length, {
        to: {
            opacity: entry?.isIntersecting ? 1 : 0,
            transformOrigin: entry?.isIntersecting ? 'bottom' : 'top',
            y: entry?.isIntersecting ? 0 : -32,
            rotateX: entry?.isIntersecting ? '0deg' : '90deg'
        },
        delay: entry?.isIntersecting ? 1000 : 0,
        config: {
            mass: 5,
            tension: 350,
            friction: 56
        }
    })

    return (
        <H1 ref={ref}>
            <Word style={spring}>
                {word}
            </Word>
            {
                trail.map((props, index) => {
                    return (
                        <HighLight key={index} style={props}>
                            {highlight[index]}
                        </HighLight>
                    )
                })
            }
        </H1>
    );
}

export default MainHeading;
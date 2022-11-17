import React from 'react';
import { SectionHeadingProps } from '../../interfaces/interfaces';
import { H2, HighLight, Word } from '../../styled-components/global/Typography';
import { useInView } from 'react-intersection-observer';
import { useSpring } from '@react-spring/web';


const SectionHeading = ({ reverse, word, highlight }: SectionHeadingProps) => {
    const { ref, entry } = useInView({
        threshold: 1,
    })

    const wordSpring = useSpring({
        to: {
            opacity: entry?.isIntersecting ? 1 : 0,
            transformOrigin: entry?.isIntersecting ? 'top' : 'bottom',
            y: entry?.isIntersecting ? 0 : 32,
            rotateX: entry?.isIntersecting ? '0deg' : '90deg'
        },
        delay: 0,
        config: {
            mass: 5,
            tension: 350,
            friction: 40            
        }
    })

    const highlightSpring = useSpring({
        to: {
            opacity: entry?.isIntersecting ? 1 : 0,
            transformOrigin: entry?.isIntersecting ? 'bottom' : 'top',
            y: entry?.isIntersecting ? 0 : -32,
            rotateX: entry?.isIntersecting ? '0deg' : '90deg'
        },
        delay: 0,
        config: {
            mass: 5,
            tension: 350,
            friction: 56
        }
    })

    return reverse ?
        <H2 ref={ref}>
            <HighLight style={highlightSpring}>{highlight}</HighLight>
            <Word style={wordSpring}>{word}</Word>
        </H2>
        :
        <H2 ref={ref}>
            <Word style={wordSpring}>{word}</Word>
            <HighLight style={highlightSpring}>{highlight}</HighLight>
        </H2>
}

export default SectionHeading;
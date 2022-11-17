import React from 'react';
import { LinkPropsTypes, ProjectLinkProps } from '../../interfaces/interfaces';
import { Link as Wrapper, Line, Title, ProjectLink as PLink } from '../../styled-components/components/Links';
import { useInView } from 'react-intersection-observer';
import { useSpring } from '@react-spring/web';


const Link = ({ url, title }: LinkPropsTypes) => {

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
        <Wrapper href={url}>
            <Line ref={ref} style={lineSpring} />
            <Title ref={ref} style={titleSpring}>{title}</Title>
        </Wrapper>
    )
};


export default Link;


export const ProjectLink = ({url, icon}: ProjectLinkProps) => {
    return <PLink href={url} target='_blank' rel='noopener noreferrer'>{icon}</PLink>;
}
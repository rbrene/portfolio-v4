import React, { useState } from 'react';
import { ProjectCardProps } from '../interfaces/interfaces';
import { Project, Header, CTA, Title, Content, Footer } from '../styled-components/components/Card';
import { ProjectLink } from './Links/Link';
import { FiGithub, FiEdit } from 'react-icons/fi';
import { useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';


const ProjectCard = ({ project }: ProjectCardProps) => {
    const { title, summary, tools, github, website } = project;
    const [hover, setHover] = useState<boolean>(false);

    const mouseEnter = (e: React.MouseEvent) => setHover(true);

    const mouseLeave = (e: React.MouseEvent) => setHover(false);

    const { ref, entry } = useInView({
        threshold: 0.4,
    });

    const spring = useSpring({
        to: {
            y: entry?.isIntersecting ? 0 : 16,
            opacity: entry?.isIntersecting ? 1 : 0,
            filter: hover ? 'brightness(120%)' : 'brightness(100%)'
        },
        delay: project.id * 150
    })

    return (
        <Project
            ref={ref}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            style={spring}
        >
            <Header>
                <CTA>
                    {github !== null ? <ProjectLink url={github} icon={<FiGithub />} /> : null}
                    <ProjectLink url={website} icon={<FiEdit />} />
                </CTA>
                <Title>
                    {title}
                </Title>
            </Header>
            <Content>
                {summary}
            </Content>
            <Footer>
                {
                    tools.map((tool, index) => <span key={index}>{tool}</span>)
                }
            </Footer>
        </Project>
    )
}

export default ProjectCard;
import React from 'react';
import { SectionsContext } from '../context/context';
import { Section } from '../components/Section';
import { PortfolioArticle } from '../styled-components/layouts/articles/index';
import PortfolioFlexContainer from '../styled-components/layouts/flex/projects';
import { PortfolioContainer, ProjectsContainer } from '../styled-components/layouts/containers/index';
import SectionHeading from '../components/Headings/SectionHeading';
import { PortfolioSVG } from '../components/Headings/SVG';
import ProjectCard from '../components/ProjectCard';
import { PortfolioData } from '../helpers/data';


const Portfolio = () => {
    const { refs } = React.useContext(SectionsContext)!;
    return (
        <Section id='projects' ref={refs.portfolio}>
            <PortfolioArticle>
                <PortfolioFlexContainer>
                    <PortfolioSVG />
                    <PortfolioContainer>
                        <SectionHeading word='My' highlight={'projects'} />
                        <ProjectsContainer>
                            {
                                PortfolioData.map(project => {
                                    return (
                                        <ProjectCard key={project.id} project={project} />
                                    )
                                })
                            }
                        </ProjectsContainer>
                    </PortfolioContainer>
                </PortfolioFlexContainer>
            </PortfolioArticle>
        </Section>
    )
}

export default Portfolio;
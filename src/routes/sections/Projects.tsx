import { useContext } from 'react';
import { SectionsContext } from '../../context';
import { Section } from '../../components/common/Section';
import { useDeviceQuery } from '../../hooks/useDeviceQuery';
import Article from '../../styles/layouts/articles';
import { FlexAlign } from '../../styles/layouts/flex';
import { PortfolioGrid, PortfolioLayout as Layout } from '../../styles/layouts/grids';
import { Padding } from '../../styles/utilities/padding';
import { Projects as ProjectData } from '../../data/projects';
import { Project } from '../../components/spec/Project';
import { SVGHeading } from '../../components/common/SVGHeading';
import { Heading } from '../../components/common/Headings';


export const Projects = () => {
    const { refs } = useContext(SectionsContext)!;
    const device = useDeviceQuery();

    return (
        <Section id='projects' ref={refs.projects}>
            <PortfolioGrid>
                <SVGHeading variant='portfolio' />

                <Article>
                    <Padding $padding={device === 'mobile' ? 16 : 32}>
                        <FlexAlign
                            $direction='column'
                            $alignItems='start'
                            $justifyContent='center'
                        >
                            <Heading size='title'> What I've Done</Heading>
                            <Heading size='h2'> My Projects </Heading>
                            <Layout>
                                {ProjectData.map(project => <Project key={project.id} project={project} />)}
                            </Layout>
                        </FlexAlign>
                    </Padding>
                </Article>
            </PortfolioGrid>
        </Section>
    )
}
import { useContext } from 'react';
import { SectionsContext } from '../../context';
import { ReactComponent as Portfolio } from '../../assets/svg/portfolio.svg';
import { Section } from '../../components/common/Section';
import { useDeviceQuery } from '../../hooks/useDeviceQuery';
import { H2, Title } from '../../styles/global/typography';
import Article from '../../styles/layouts/articles';
import { SVGContainer } from '../../styles/layouts/containers';
import { FlexAlign, FlexCenter } from '../../styles/layouts/flex';
import { PortfolioGrid, PortfolioLayout as Layout } from '../../styles/layouts/grids';
import { Padding, PaddingCustom } from '../../styles/utilities/padding';
import { Projects as ProjectData } from '../../data/projects';
import { Project } from '../../components/spec/Project';


export const Projects = () => {
    const { refs } = useContext(SectionsContext)!;
    const device = useDeviceQuery();

    return (
        <Section id='projects' ref={refs.projects}>
            <PortfolioGrid>
                <SVGContainer>
                    <PaddingCustom $block={device === 'mobile' ? 16 : 32} $inline={device === 'mobile' ? 8 : 32}>
                        <FlexCenter>
                            <Portfolio />
                        </FlexCenter>
                    </PaddingCustom>
                </SVGContainer>
                <Article>
                    <Padding $padding={device === 'mobile' ? 16 : 32}>
                        <FlexAlign
                            $direction='column'
                            $alignItems='start'
                            $justifyContent='center'
                        >
                            <header>
                                <Title> What I've Done </Title>
                                <H2> My Projects </H2>
                            </header>
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
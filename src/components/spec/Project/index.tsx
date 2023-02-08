import React from 'react';
import { ProjectCard } from '../../../types/components/project';
import { Project as Card, Header, Body, Footer, Layout, Tools, FooterLayout, Tool, Description, CTA } from '../../../styles/components/spec/project';
import { FlexAlign } from '../../../styles/layouts/flex';
import { Padding, PaddingBlock } from '../../../styles/utilities/padding';
import { Link } from '../../common/Link';
import { useInView } from 'react-intersection-observer';
import { useSpring } from '@react-spring/web';


export const Project: React.FC<ProjectCard> = ({ project }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const spring = useSpring({
        to: {
            opacity: inView ? 1 : 0,
            scale: inView ? 1 : 0.5
        },
        delay: inView ? project.id * 100 : 0
    })

    return (
        <Card
            ref={ref}
            style={spring}
        >
            <Padding>
                <Layout>
                    <Header>
                        <FlexAlign>
                            {project.title}
                        </FlexAlign>
                    </Header>
                    <Body>
                        <PaddingBlock $block={8}>
                            <Description children={project.description} />
                        </PaddingBlock>
                    </Body>
                    <Footer>
                        <FooterLayout>
                            <Tools>
                                <FlexAlign $wrap='wrap' $gap={4}>
                                    {project.tools.map((tool, index) => (
                                        <Tool key={index}> {tool} </Tool>
                                    ))}
                                </FlexAlign>
                            </Tools>
                            <CTA>
                                <FlexAlign $gap={8}>

                                    <Link url={project.url.site} title='Preview' />
                                    <Link url={project.url.code} title='Github' />

                                </FlexAlign>
                            </CTA>
                        </FooterLayout>
                    </Footer>
                </Layout>
            </Padding>
        </Card>
    )
}
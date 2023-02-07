import React from 'react';
import { ProjectCard } from '../../../types/components/project';
import { Project as Card, Header, Body, Footer, Layout, Tools, FooterLayout, Tool, Description, CTA } from '../../../styles/components/spec/project';
import { FlexAlign } from '../../../styles/layouts/flex';
import { Padding, PaddingBlock } from '../../../styles/utilities/padding';
import { useDeviceQuery } from '../../../hooks/useDeviceQuery';
import { Link } from '../../common/Link';


export const Project: React.FC<ProjectCard> = ({ project }) => {
    const device = useDeviceQuery();

    return (
        <Card>
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
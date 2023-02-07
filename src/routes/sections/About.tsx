import { useContext } from 'react';
import { SectionsContext } from '../../context';
import { ReactComponent as AboutMe } from '../../assets/svg/about-me.svg';
import { Section } from '../../styles/components/common/section';
import { AboutGrid as Grid } from '../../styles/layouts/grids';
import { SVGContainer as Container } from '../../styles/layouts/containers';
import { Padding, PaddingCustom } from '../../styles/utilities/padding';
import { useDeviceQuery } from '../../hooks/useDeviceQuery';
import { FlexAlign, FlexCenter } from '../../styles/layouts/flex';
import Article from '../../styles/layouts/articles';
import { H2, P, Title } from '../../styles/global/typography';


export const About = () => {
    const { refs } = useContext(SectionsContext)!;
    const device = useDeviceQuery();

    return (
        <Section id='info' ref={refs.info}>
            <Grid>

                <Article>
                    <Padding $padding={device === 'mobile' ? 16 : 32}>
                        <FlexAlign
                            $direction='column'
                            $alignItems='start'
                            $justifyContent='center'
                        >
                            <Title> Overview </Title>
                            <H2> Why Me? </H2>
                            <P $width={{ mobile: 64, tablet: 64 }} $marginTop={16} $lineHeight={1.8}>
                                I have a strong ambition to become a web developer and have been engaging in that pursuit for at least three years. I have a good understanding of JavaScript and my experience includes utilizing the React framework.
                            </P>
                            <P $width={{ mobile: 64, tablet: 64 }} $marginTop={16} $lineHeight={1.8}>
                                Additionally, I am knowledgeable in Python, and have used the Django framework. It is my professional aspiration to stay abreast of the latest web technologies and to come up with creative coding solutions to common or difficult problems that can make the lives of people simpler.
                            </P>
                        </FlexAlign>
                    </Padding>
                </Article>

                <Container>
                    <PaddingCustom
                        $block={device === 'mobile' ? 16 : 32}
                        $inline={device === 'mobile' ? 8 : 32}
                    >
                        <FlexCenter>
                            <AboutMe />
                        </FlexCenter>
                    </PaddingCustom>
                </Container>
            </Grid>
        </Section>
    )
}
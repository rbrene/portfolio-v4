import { useContext } from 'react';
import { SectionsContext } from '../../context';
import { ReactComponent as RaeesBrene } from '../../assets/svg/raees-brene.svg';
import { Button } from '../../components/common/Buttons';
import { Section } from '../../components/common/Section';
import { useDeviceQuery } from '../../hooks/useDeviceQuery';
import { H1, P, Title } from '../../styles/global/typography';
import Article from '../../styles/layouts/articles';
import { CallToAction, SVGContainer as Container } from '../../styles/layouts/containers';
import { FlexAlign, FlexCenter } from '../../styles/layouts/flex';
import { HomeGrid as Grid } from '../../styles/layouts/grids';
import { PaddingCustom, PaddingInline } from '../../styles/utilities/padding';


export const Home = () => {
    const { refs } = useContext(SectionsContext)!;
    const device = useDeviceQuery();

    return (
        <Section id='home' ref={refs.home}>
            <Grid>

                <Container>
                    <PaddingCustom
                        $block={device === 'mobile' ? 16 : 32}
                        $inline={device === 'mobile' ? 8 : 32}
                    >
                        <FlexCenter>
                            <RaeesBrene />
                        </FlexCenter>
                    </PaddingCustom>
                </Container>

                <Article>
                    <PaddingInline $inline={device === 'mobile' ? 8 : 32}>
                        <FlexAlign $direction='column' $alignItems={'start'} $justifyContent='center'>
                            <Title> Web Developer </Title>
                            <H1>
                                Let's build something great.
                            </H1>
                            <P
                                $width={{ mobile: 32, tablet: 32 }}
                                $fontSize='normal'
                            >
                                I'm a developer specialising in frontend web development technologies.
                            </P>
                            <CallToAction>
                                <FlexAlign>
                                    <Button variant='primary'> Discover My Projects </Button>
                                </FlexAlign>
                            </CallToAction>
                        </FlexAlign>
                    </PaddingInline>
                </Article>

            </Grid>
        </Section>
    )
};
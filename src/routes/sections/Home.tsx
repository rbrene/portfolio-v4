import { useContext } from 'react';
import { SectionsContext } from '../../context';
import { Button } from '../../components/common/Buttons';
import { Section } from '../../components/common/Section';
import { useDeviceQuery } from '../../hooks/useDeviceQuery';
import { H1, P, Title } from '../../styles/global/typography';
import Article from '../../styles/layouts/articles';
import { CallToAction } from '../../styles/layouts/containers';
import { FlexAlign } from '../../styles/layouts/flex';
import { HomeGrid as Grid } from '../../styles/layouts/grids';
import { PaddingInline } from '../../styles/utilities/padding';
import { SVGHeading } from '../../components/common/SVGHeading';


export const Home = () => {
    const { refs } = useContext(SectionsContext)!;
    const device = useDeviceQuery();

    const calltoaction = (e: React.MouseEvent<HTMLButtonElement>) => {
        refs.projects.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <Section id='home' ref={refs.home}>
            <Grid>

                <SVGHeading variant='home' />

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
                                    <Button
                                        variant='primary'
                                        onClick={calltoaction}
                                    >
                                        Discover My Projects
                                    </Button>
                                </FlexAlign>
                            </CallToAction>
                        </FlexAlign>
                    </PaddingInline>
                </Article>

            </Grid>
        </Section>
    )
};
import { useContext } from 'react';
import { SectionsContext } from '../../context';
import { Button } from '../../components/common/Buttons';
import { Section } from '../../components/common/Section';
import { useDeviceQuery } from '../../hooks/useDeviceQuery';
import { P } from '../../styles/global/typography';
import Article from '../../styles/layouts/articles';
import { CallToAction } from '../../styles/layouts/containers';
import { FlexAlign } from '../../styles/layouts/flex';
import { HomeGrid as Grid } from '../../styles/layouts/grids';
import { PaddingInline } from '../../styles/utilities/padding';
import { SVGHeading } from '../../components/common/SVGHeading';
import { Heading } from '../../components/common/Headings';
import { useInView } from 'react-intersection-observer';
import { useSpring } from '@react-spring/web';


export const Home = () => {
    const { refs } = useContext(SectionsContext)!;
    const device = useDeviceQuery();
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const spring = useSpring({
        to: {
            opacity: inView ? 1 : 0,
        },
        delay: 300
    });

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
                            <Heading size='title'>
                                Web Developer
                            </Heading>
                            <Heading size='h1'>
                                Let's build something great.
                            </Heading>
                            <P
                                $width={{ mobile: 32, tablet: 32 }}
                                $fontSize='normal'
                                ref={ref}
                                style={spring}
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
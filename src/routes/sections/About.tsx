import { useContext } from 'react';
import { SectionsContext } from '../../context';
import { Section } from '../../styles/components/common/section';
import { AboutGrid as Grid } from '../../styles/layouts/grids';
import { Padding } from '../../styles/utilities/padding';
import { useDeviceQuery } from '../../hooks/useDeviceQuery';
import { FlexAlign } from '../../styles/layouts/flex';
import Article from '../../styles/layouts/articles';
import { P } from '../../styles/global/typography';
import { SVGHeading } from '../../components/common/SVGHeading';
import { Heading } from '../../components/common/Headings';
import { useInView } from 'react-intersection-observer';
import { useSpring } from '@react-spring/web';


export const About = () => {
    const { refs } = useContext(SectionsContext)!;
    const device = useDeviceQuery();
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const p1 = useSpring({
        to: {
            opacity: inView ? 1 : 0,
            x: inView ? 0 : -16
        },
        delay: 300
    });
    const p2 = useSpring({
        to: {
            opacity: inView ? 1 : 0,
            x: inView ? 0 : 16
        },
        delay: 400
    });

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
                            <Heading size='title'> Overview </Heading>
                            <Heading size='h2'> Why Me? </Heading>
                            <P
                                $width={{ mobile: 64, tablet: 64 }}
                                $marginTop={16}
                                $lineHeight={1.8}
                                ref={ref}
                                style={p1}
                            >
                                I have a strong ambition to become a software/web developer and have been engaging in that pursuit for at least three years. I have a good understanding of JavaScript and my experience includes utilizing the React framework.
                            </P>
                            <P
                                $width={{ mobile: 64, tablet: 64 }}
                                $marginTop={16}
                                $lineHeight={1.8}
                                ref={ref}
                                style={p2}
                            >
                                Additionally, I am knowledgeable in Python, and have used the Django framework. It is my professional aspiration to stay abreast of the latest technologies and to come up with creative coding solutions to common or difficult problems that can make the lives of people simpler.
                            </P>
                        </FlexAlign>
                    </Padding>
                </Article>

                <SVGHeading variant='about' />
            </Grid>
        </Section>
    )
}
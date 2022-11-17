import React, { useRef } from 'react';
import { Section } from '../styled-components/index';
import { AboutArticle } from '../styled-components/layouts/articles/index';
import SectionHeading from '../components/Headings/SectionHeading';
import { AboutMeSVG } from '../components/Headings/SVG';
import BackgroundImage from '../components/BackgroundImage';
import AboutFlexLayout from '../styled-components/layouts/flex/about';
import { AboutTextContainer } from '../styled-components/layouts/containers/index';
import { P } from '../styled-components/global/Typography';
import aboutBgImage from '../assets/images/IMG_20181010_035609.png';
import { useInView } from 'react-intersection-observer';
import { useSpring } from '@react-spring/web';


const About = () => {
    const aboutRef = useRef(null);
    const { ref, entry } = useInView({
        threshold: 0.5
    })

    const p1 = useSpring({
        to: {
            opacity: entry?.isIntersecting ? 1 : 0,
            x: entry?.isIntersecting ? 0 : 32,
        },
        delay: entry?.isIntersecting ? 700 : 0,
        config: {
            mass: 5,
            tension: 350,
            friction: 56
        }
    })

    const p2 = useSpring({
        to: {
            opacity: entry?.isIntersecting ? 1 : 0,
            x: entry?.isIntersecting ? 0 : -32,
        },
        delay: entry?.isIntersecting ? 700 : 0,
        config: {
            mass: 5,
            tension: 350,
            friction: 56
        }
    })
    return (
        <Section id='about' ref={aboutRef}>
            <BackgroundImage src={aboutBgImage} />
            <AboutArticle>
                <AboutFlexLayout>
                    <AboutTextContainer>
                        <SectionHeading word='Me' highlight='Why' reverse={true} />
                        <P ref={ref} style={p1}>
                            Due to my curious and helpful nature I am naturally drawn to web development as it rewards me with opportunities to assits those in need and make tasks easier for them in the daily lives on the web.
                        </P>
                        <P ref={ref} style={p2}>
                            It also pushes me to keep on learning new things. experiement with different languages and finding new ways of doing old things.
                        </P>
                    </AboutTextContainer>
                    <AboutMeSVG />
                </AboutFlexLayout>
            </AboutArticle>
        </Section>
    )
}

export default About;
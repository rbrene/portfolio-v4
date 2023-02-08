import React from 'react';
import { ReactComponent as RaeesBrene } from '../../../assets/svg/raees-brene.svg';
import { ReactComponent as About } from '../../../assets/svg/about-me.svg';
import { ReactComponent as PortfolioSVGElement } from '../../../assets/svg/portfolio.svg';
import { ReactComponent as ContactMe } from '../../../assets/svg/contact.svg';
import { useDeviceQuery } from '../../../hooks/useDeviceQuery';
import { SVGContainer as Container } from '../../../styles/layouts/containers';
import { FlexCenter } from '../../../styles/layouts/flex';
import { PaddingCustom } from '../../../styles/utilities/padding';
import { SVGHeadingProps } from '../../../types/components/svgheading';
import { useInView } from 'react-intersection-observer';
import { useSpring } from '@react-spring/web';


const Raees = () => {
    const device = useDeviceQuery();
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const spring = useSpring({
        to: {
            opacity: inView ? 1 : 0,
            x: inView ? 0 : 16
        }
    })

    return (
        <Container>
            <PaddingCustom
                $block={device === 'mobile' ? 16 : 32}
                $inline={device === 'mobile' ? 8 : 32}
            >
                <FlexCenter ref={ref} style={spring}>
                    <RaeesBrene />
                </FlexCenter>
            </PaddingCustom>
        </Container>
    )
};

const AboutMe = () => {
    const device = useDeviceQuery();
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const spring = useSpring({
        to: {
            opacity: inView ? 1 : 0,
            x: inView ? 0 : -16
        },
        config: {
            mass: 5,
            tension: 350,
            friction: 40,
        }
    })

    return (
        <Container>
            <PaddingCustom
                $block={device === 'mobile' ? 16 : 32}
                $inline={device === 'mobile' ? 8 : 32}
            >
                <FlexCenter ref={ref} style={spring}>
                    <About />
                </FlexCenter>
            </PaddingCustom>
        </Container>
    )
};

const Portfolio = () => {
    const device = useDeviceQuery();
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const spring = useSpring({
        to: {
            opacity: inView ? 1 : 0,
            x: inView ? 0 : 16
        }
    })

    return (
        <Container>
            <PaddingCustom
                $block={device === 'mobile' ? 16 : 32}
                $inline={device === 'mobile' ? 8 : 32}
            >
                <FlexCenter ref={ref} style={spring}>
                    <PortfolioSVGElement />
                </FlexCenter>
            </PaddingCustom>
        </Container>
    )
};

const Contact = () => {
    const device = useDeviceQuery();
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const spring = useSpring({
        to: {
            opacity: inView ? 1 : 0,
            x: inView ? 0 : -16
        }
    })

    return (
        <Container>
            <PaddingCustom
                $block={device === 'mobile' ? 16 : 32}
                $inline={device === 'mobile' ? 8 : 32}
            >
                <FlexCenter ref={ref} style={spring}>
                    <ContactMe />
                </FlexCenter>
            </PaddingCustom>
        </Container>
    )
};

export const SVGHeading: React.FC<SVGHeadingProps> = ({ variant }) => {
    switch (variant) {
        case 'home':
            return <Raees />;
        case 'about':
            return <AboutMe />;
        case 'portfolio':
            return <Portfolio />;
        case 'contact':
            return <Contact />;
        default:
            throw new Error(`'variant' props has been defined for 'SVGHeading' element`)
    }
};
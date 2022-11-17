import React from 'react';
import { ReactComponent as RaeesBrene } from '../../assets/svg/raees-brene.svg';
import { ReactComponent as AboutMe  } from '../../assets/svg/about-me.svg';
import { ReactComponent as Portfolio  } from '../../assets/svg/portfolio.svg';
import { ReactComponent as Contact } from '../../assets/svg/contact.svg';
import { HomeSVGContainer, AboutSVGContainer, PortfolioContainer, ContactSVGContainer } from '../../styled-components/layouts/containers/SVGContainers';
import { useInView } from 'react-intersection-observer';
import { useSpring } from '@react-spring/web';


export const RaeesBreneSVG = () => {
    const { ref, entry } = useInView({
        threshold: 0.5,
    })

    const spring = useSpring({
        to: {
            x: entry?.isIntersecting ? 0 : 64,
            opacity: entry?.isIntersecting ? 1 : 0,
            rotateY: entry?.isIntersecting ? '0deg' : '90deg'
        },
        delay: 1000,
        config: {
            mass: 5,
            tension: 350,
            friction: 56
        }
    })
    return (
        <HomeSVGContainer
            ref={ref}
            style={spring}
        >
            <RaeesBrene />
        </HomeSVGContainer>
    )
}

export const AboutMeSVG = () => {
    const { ref, entry } = useInView({
        threshold: 0.5,
    })

    const spring = useSpring({
        to: {
            x: entry?.isIntersecting ? 0 : 64,
            opacity: entry?.isIntersecting ? 1 : 0,
            rotateY: entry?.isIntersecting ? '0deg' : '90deg'
        },
        delay: 900,
        config: {
            mass: 5,
            tension: 350,
            friction: 56
        }
    })
    return (
        <AboutSVGContainer
            ref={ref}
            style={spring}
        >
            <AboutMe />
        </AboutSVGContainer>
    )
}

export const PortfolioSVG = () => {
    const { ref, entry } = useInView({
        threshold: 0.2,
    })

    const spring = useSpring({
        to: {
            x: entry?.isIntersecting ? 0 : 64,
            opacity: entry?.isIntersecting ? 1 : 0,
            rotateY: entry?.isIntersecting ? '0deg' : '90deg'
        },
        delay: 900,
        config: {
            mass: 5,
            tension: 350,
            friction: 56
        }
    })
    return (
        <PortfolioContainer
            ref={ref}
            style={spring}
        >
            <Portfolio />
        </PortfolioContainer>
    )
}

export const ContactSVG = () => {
    const { ref, entry } = useInView({
        threshold: 0.2,
    })

    const spring = useSpring({
        to: {
            x: entry?.isIntersecting ? 0 : 64,
            opacity: entry?.isIntersecting ? 1 : 0,
            rotateY: entry?.isIntersecting ? '0deg' : '90deg'
        },
        delay: 900,
        config: {
            mass: 5,
            tension: 350,
            friction: 56
        }
    })
    return (
        <ContactSVGContainer
            ref={ref}
            style={spring}
        >
            <Contact />
        </ContactSVGContainer>
    )
}

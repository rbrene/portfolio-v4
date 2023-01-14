import React from 'react';
import { SectionsContext } from '../context/context';
import { Section } from '../components/Section';
import MainHeading from '../components/Headings/MainHeading';
import Link from '../components/Links/Link';
import { RaeesBreneSVG } from '../components/Headings/SVG';
import HomeFlexLayout from '../styled-components/layouts/flex/home';
import { HomeArticle } from '../styled-components/layouts/articles/index';
import { HomeTextContainer } from '../styled-components/layouts/containers/index';


const Home = () => {
    const { refs } = React.useContext(SectionsContext)!;
    const click = (e: React.MouseEvent) => {
        e.preventDefault();
        refs.about.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <Section id='home' ref={refs.home}>
            <HomeArticle>
                <HomeFlexLayout>
                    <RaeesBreneSVG />
                    <HomeTextContainer>
                        <MainHeading word="I'm a" highlight={['Web', 'Developer']} />
                        <Link
                            url='/'
                            title='Explore'
                            onClick={click}
                        />
                    </HomeTextContainer>
                </HomeFlexLayout>
            </HomeArticle>
        </Section>
    )
}

export default Home;
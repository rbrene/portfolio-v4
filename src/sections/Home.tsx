import React from 'react';
import { Section } from '../styled-components/index';
import MainHeading from '../components/Headings/MainHeading';
import Link from '../components/Links/Link';
import { RaeesBreneSVG } from '../components/Headings/SVG';
import HomeFlexLayout from '../styled-components/layouts/flex/home';
import { HomeArticle } from '../styled-components/layouts/articles/index';
import { HomeTextContainer } from '../styled-components/layouts/containers/index';


const Home = () => {

    return (
        <Section id='home'>
            <HomeArticle>
                <HomeFlexLayout>
                    <RaeesBreneSVG />
                    <HomeTextContainer>
                        <MainHeading word="I'm a" highlight={['Web', 'Developer']} />
                        <Link url='/' title='Explore' />
                    </HomeTextContainer>
                </HomeFlexLayout>
            </HomeArticle>
        </Section>
    )
}

export default Home;
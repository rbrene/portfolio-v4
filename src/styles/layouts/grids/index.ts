import styled from 'styled-components';
import { media } from '../../../helpers/mediaQueries';
import { rem } from '../../../helpers/units';
import Container from '../containers/index';


const Grid = styled(Container)`
    display: grid;
`;

export default Grid;

export const HeroGrid = styled(Grid)`
    grid-template-columns: 100%;
    grid-auto-rows: minmax(max(100vh, max-content), max-content);
    grid-template-rows: 100vh 100vh max-content 100vh;
    gap: 10vh;

    @media ${media.mobile.min} {
        grid-template-rows: 100vh 100vh 100vh 100vh;
    }
`;

export const HomeGrid = styled(Grid)`
    grid-template-columns: ${rem(119)} 1fr;
    grid-template-rows: 100%;

    @media ${media.mobile.min} {
        grid-template-columns: ${rem(170)} 1fr;
        grid-template-rows: 100%;
    }
`;

export const AboutGrid = styled(Grid)`
    grid-template-columns: minmax(auto, 100%) ${rem(119)};
    grid-template-rows: 100%;
    justify-content: space-between;

    @media ${media.mobile.min} {
        grid-template-columns: ${rem(520)} ${rem(170)};
    }
`;

export const PortfolioGrid = styled(Grid)`
    max-width: ${rem(1366)};
    grid-template-columns: ${rem(119)} minmax(auto, 100%);
    grid-template-rows: 100%;

    @media ${media.mobile.min} {
        grid-template-columns: ${rem(170)} minmax(auto, 100%);
        justify-content: space-between;
    }
`;

export const PortfolioLayout = styled(Grid)`
    margin-top: ${rem(16)};
    grid-template-columns: minmax(50%, max(50%, ${rem(380)}));
    grid-auto-rows: minmax(max-content, ${rem(192)});
    gap: ${rem(16)};

    @media ${media.mobile.min} {
        grid-template-columns: repeat(2, minmax(min(${rem(256)}, 50%), 1fr));
        grid-auto-rows: auto;
    }

    @media ${media.tablet.min} {
        grid-template-columns: repeat(3, minmax(${rem(256)}, 1fr));
        grid-auto-rows: ${rem(172)};
        place-content: center;
    }
`;

export const ContactGrid = styled(Grid)`
    grid-template-columns: minmax(auto, 100%) ${rem(119)};
    grid-template-rows: 100%;
    justify-content: space-between;

    @media ${media.mobile.min} {
        grid-template-columns: ${rem(520)} ${rem(170)};
    }
`;

import styled from 'styled-components';
import Container from '../containers/index';
import { rem, min } from '../../../helpers/units';


const Grid = styled(Container)`
    display: grid;
    ${({ $areas }) => $areas && `grid-template-areas: ${$areas}`};
    ${({ $columns }) => $columns && `grid-template-rows: ${$columns}`};
    ${({ $rows }) => $rows && `grid-template-rows: ${$rows}`};
`;

export default Grid;

export const HeroGrid = styled(Grid)`
    grid-template-rows: 100vh 100vh max-content 100vh;
    gap: 20vh;
`;

export const ContactFormGrid = styled(Grid)`
    grid-template-columns: 100%;
    grid-auto-rows: minmax(${rem(64)}, max-content);
    column-gap: ${rem(16)};
    row-gap: ${rem(8)};

    ${min('mobile')} {
        grid-template-areas: 'fullName email' 'subject subject' 'message message' 'submit submit';
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: minmax(${rem(80)}, max-content);
    }
`;
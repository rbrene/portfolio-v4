import styled from 'styled-components';
import { ISCGridArea, ISCGridProps } from '../types';
import unit from '../../../../helpers/units';
import { Wrapper } from '../../../styles/utilities';


const SCGrid = styled(Wrapper.Relative) <ISCGridProps>`
    display: grid;
    ${({ $gridareas }) => $gridareas ? `grid-template-areas: ${$gridareas}` : null};
    ${({ $columns }) => $columns ? `grid-template-columns: ${$columns}` : null};
    ${({ $rows }) => $rows ? `grid-template-rows: ${$rows}` : null};
    ${({ $autocolumns }) => $autocolumns ? `grid-auto-columns: ${$autocolumns}` : null};
    ${({ $autorows }) => $autorows ? `grid-auto-rows: ${$autorows}` : null};
    ${({ $placeitems }) => $placeitems ? `place-items: ${$placeitems}` : null};
    ${({ $placecontent }) => $placecontent ? `place-content: ${$placecontent}` : null};
    ${({ $gap }) => $gap && `gap: ${unit.rem($gap)}`};
`;

const SCInlineGrid = styled(Wrapper.Relative) <ISCGridProps>`
    display: inline-grid;
    ${({ $gridareas }) => $gridareas ? `grid-template-areas: ${$gridareas}` : null};
    ${({ $columns }) => $columns ? `grid-template-columns: ${$columns}` : null};
    ${({ $rows }) => $rows ? `grid-template-rows: ${$rows}` : null};
    ${({ $autocolumns }) => $autocolumns ? `grid-auto-columns: ${$autocolumns}` : null};
    ${({ $autorows }) => $autorows ? `grid-auto-rows: ${$autorows}` : null};
    ${({ $placeitems }) => $placeitems ? `place-items: ${$placeitems}` : null};
    ${({ $placecontent }) => $placecontent ? `place-content: ${$placecontent}` : null};
    ${({ $gap }) => $gap && `gap: ${unit.rem($gap)}`};
`;

const SCArea = styled(Wrapper.Relative) <ISCGridArea>`
    grid-area: ${({ $area }) => $area && $area};
`;

const Element = { SCGrid, SCInlineGrid, SCArea };

export default Element;
import React from 'react';
import Element from './styles';
import { ICGridArea, ICGridProps } from './types';


const Grid: React.FC<ICGridProps> = ({ areas, columns, autocolumns, rows, autorows, placeitems, placecontent, gap, children }) => {

    if (columns && autocolumns) {
        throw new Error(`Error: 'columns' and 'autocolumns' props cannot be provided at the same time.`)
    };

    if (rows && autorows) {
        throw new Error(`Error: 'rows' and 'autorows' props cannot be provided at the same time.`)
    };

    return (
        <Element.SCGrid
            $gridareas={areas}
            $columns={columns}
            $autocolumns={autocolumns}
            $rows={rows}
            $autorows={autorows}
            $gap={gap}
            $placeitems={placeitems}
            $placecontent={placecontent}
            children={children}
        />
    )
};

const Inline: React.FC<ICGridProps> = ({ areas, columns, autocolumns, rows, autorows, placeitems, placecontent, gap, children }) => {

    if (columns && autocolumns) {
        throw new Error(`Error: 'columns' and 'autocolumns' props cannot be provided at the same time.`)
    };

    if (rows && autorows) {
        throw new Error(`Error: 'rows' and 'autorows' props cannot be provided at the same time.`)
    };

    return (
        <Element.SCInlineGrid
            $gridareas={areas}
            $columns={columns}
            $autocolumns={autocolumns}
            $rows={rows}
            $autorows={autorows}
            $gap={gap}
            $placeitems={placeitems}
            $placecontent={placecontent}
            children={children}
        />
    )
};

const Area: React.FC<ICGridArea> = ({ area, children }) => {
    return (
        <Element.SCArea $area={area}>
            {children}
        </Element.SCArea>
    )
};

const Component = { Grid, Inline, Area };

export default Component;
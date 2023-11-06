import { TChildren } from '../../../../types/index';


export interface ISCGridProps {
    $columns?: string | undefined;
    $autocolumns?: string | undefined;
    $rows?: string | undefined;
    $gap?: number;
    $autorows?: string | undefined;
    $gridareas?: string;
    $placecontent?: string;
    $placeitems?: string;
};

export interface ISCGridArea {
    $area: string;
};

export interface ICGridProps {
    areas?: string;
    columns?: string | undefined;
    autocolumns?: string | undefined;
    rows?: string | undefined;
    autorows?: string | undefined;
    placecontent?: string;
    placeitems?: string;
    gap?: number;
    children: TChildren;
};

export interface ICGridArea {
    area: string;
    children: TChildren;
};
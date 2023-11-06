export interface ISection {
    id?: string;
    children: React.ReactElement | React.ReactNode | Array<React.ReactElement | React.ReactNode>;
    background?: string;
    color?: string;
};

export interface ISCSection {
    $background?: string;
    $color?: string;
};
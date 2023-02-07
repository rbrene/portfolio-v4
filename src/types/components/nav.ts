export interface NavItemProps {
    style?: any;
    onClick?: React.MouseEventHandler<HTMLLIElement>;
    children: string;
};

export interface NavListProps {
    items: Array<string>;
}
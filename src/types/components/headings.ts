type HeadingSizeType = 'h1' | 'h2' | 'title';
type HeadingChildrenType = string;

export interface HeadingProps {
    children: HeadingChildrenType;
};

export interface HeadingComponentProps {
    size: HeadingSizeType;
    children: HeadingChildrenType;
};
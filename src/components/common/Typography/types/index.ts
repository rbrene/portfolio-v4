import { TChildren, TTextAlign } from './../../../../types/index';


export interface ICHeadingOne {
    children?: string | TChildren;
    title: string;
}
export interface ICHeading {
    children?: string | TChildren;
    title?: string;
}

export interface ICParagraph {
    marginblock?: number | [number, number];
    width?: number;
    align?: TTextAlign;
    children?: string | TChildren;
    text?: string;
}

export interface ISCParagraph {
    $marginblock?: string | [string, string];
    $width?: number;
    $align?: TTextAlign;
}
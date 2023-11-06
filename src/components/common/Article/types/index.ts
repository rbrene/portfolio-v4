import { TChildren } from '../../../../types';

export interface ICArticle {
    width?: string;
    height?: string;
    children: TChildren;
    as?: string;
}

export interface ISCArticle {
    $width?: string;
    $height?: string;
}
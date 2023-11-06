import { TChildren } from '../../../../types';


type TPadding = number | [number, number] | [number, number, number, number];
type TStyledPadding = string | string[];

export interface ISCPadding {
    $padding: TStyledPadding;
};


export interface ICPadding {
    children?: TChildren;
    padding?: TPadding;
}
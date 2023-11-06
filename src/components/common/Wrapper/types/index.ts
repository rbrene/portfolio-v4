import { TChildren } from '../../../../types';


type TSCPosition = 'relative' | 'absolute' | 'fixed' | 'sticky';
type TSCTop = number;
type TSCRight = number;
type TSCBottom = number;
type TSCLeft = number;
type TSCInset = number | Array<TSCTop | TSCRight | TSCBottom | TSCLeft | number>;
type TSCWidth = number;
type TSCZindex = number | 'inherit';


export interface ICContainer {
    children: TChildren;
    position?: TSCPosition;
    inset?: TSCInset;
    top?: TSCTop;
    right?: TSCRight;
    bottom?: TSCBottom;
    left?: TSCLeft;
    width?: TSCWidth;
    background?: string;
    color?: string;
    zindex?: TSCZindex;
};

export interface ISCContainer {
    $position: TSCPosition;
    $inset?: TSCInset;
    $top?: TSCTop;
    $right?: TSCRight;
    $bottom?: TSCBottom;
    $left?: TSCLeft;
    $width?: TSCWidth;
    $background?: string;
    $color?: string;
    $zindex?: TSCZindex;
};
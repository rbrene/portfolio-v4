import { DirectionPropType, FlexWrapPropType, AlignItemsPropType, JustifyItemsPropType, TChildren } from './../../../../types/index';


export interface ISCFlexProps {
    $direction?: DirectionPropType;
    $gap?: number;
    $wrap?: FlexWrapPropType;
    $alignitems?: AlignItemsPropType;
    $justifycontent?: JustifyItemsPropType;
};

export interface ICFlexProps {
    direction?: DirectionPropType;
    gap?: number;
    wrap?: FlexWrapPropType;
    alignitems?: AlignItemsPropType;
    justifycontent?: JustifyItemsPropType;
    children: TChildren;
};

export interface ICFlexCenterProps {
    direction?: DirectionPropType;
    gap?: number;
    children: TChildren;
};

export interface ISCFlexCenterProps {
    $direction?: DirectionPropType;
    $gap?: number;
};
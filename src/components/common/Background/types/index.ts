import { TSCMixBlendMode } from '../../../../types';


export interface ISCBackgroundImage {
    $src: string;
    $blend?: TSCMixBlendMode;
    $size?: 'contain' | 'cover' | string;
    $color?: string;
    $position?: string;
    $opacity?: number;
    $clip?: string;
};

export interface ICBackgroundImage {
    src: string;
    blend?: TSCMixBlendMode;
    size?: 'contain' | 'cover' | string;
    color?: string;
    position?: string;
    opacity?: number;
    spring?: any;
    clip?: string;
    children?: string;
};
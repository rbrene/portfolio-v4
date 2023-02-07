type Dimensions = {
    desktop: number;
    tablet: number;
    mobile: number;
}

export const viewportDimensions: Dimensions = {
    desktop: 1360,
    tablet: 1080,
    mobile: 720
}

export const px = (u: number) => `${u * 16}px`;

export const rem = (u: number) => `${u / 16}rem`;

export const em = (u: number) => `${u / 16}em`;

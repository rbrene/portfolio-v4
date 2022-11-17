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

export const min = (vw: string) => {
    const { desktop, tablet, mobile } = viewportDimensions;

    switch (vw) {
        case 'desktop':
            return `@media (min-width: ${em(desktop)})`;
        case 'tablet':
            return `@media (min-width: ${em(tablet)})`;
        case 'mobile':
            return `@media (min-width: ${em(mobile)})`;
        default:
            return console.error('No viewport type specified')
    }
}

export const max = (vw: string) => {
    const { desktop, tablet, mobile } = viewportDimensions;

    switch (vw) {
        case 'desktop':
            return `@media (max-width: ${em(desktop - 0.2)})`;
        case 'tablet':
            return `@media (max-width: ${em(tablet - 0.2)})`;
        case 'mobile':
            return `@media (max-width: ${em(mobile - 0.2)})`;
        default:
            return console.error('No viewport type specified')
    }
}
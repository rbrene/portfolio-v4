interface IVWDimension {
    hd: number;
    desktop: number;
    tablet: number;
    mobile: 480;
};

export const dimensions: IVWDimension = {
    hd: 1660,
    desktop: 1080,
    tablet: 720,
    mobile: 480
};

const hUnit = {
    em: (u: number) => `${u / 16}em`,
    rem: (u: number) => `${u / 16}rem`,
    px: (u: number) => `${u * 16}px`
};

export default hUnit;
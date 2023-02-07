import { em, viewportDimensions } from './units';


export const media = {
    desktop: {
        min: `(min-width: ${em(viewportDimensions.desktop)})`,
        max: `(max-width: ${em(viewportDimensions.desktop)})`
    },
    tablet: {
        min: `(min-width: ${em(viewportDimensions.tablet)})`,
        max: `(max-width: ${em(viewportDimensions.tablet)})`
    },
    mobile: {
        min: `(min-width: ${em(viewportDimensions.mobile)})`,
        max: `(max-width: ${em(viewportDimensions.mobile)})`
    }
}
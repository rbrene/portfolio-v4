import unit, { dimensions } from './units';


const hMedia = {
    hd: {
        min: `(min-width: ${unit.em(dimensions.hd)})`,
        max: `(max-width: ${unit.em(dimensions.hd)})`
    },
    desktop: {
        min: `(min-width: ${unit.em(dimensions.desktop)})`,
        max: `(max-width: ${unit.em(dimensions.desktop)})`
    },
    tablet: {
        min: `(min-width: ${unit.em(dimensions.tablet)})`,
        max: `(max-width: ${unit.em(dimensions.tablet)})`
    },
    mobile: {
        min: `(min-width: ${unit.em(dimensions.mobile)})`,
        max: `(max-width: ${unit.em(dimensions.mobile)})`
    }
};

export default hMedia;
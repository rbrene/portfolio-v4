import { unit } from '.';


type TPadding = number | [number, number] | [number, number, number, number];
type TStyledPadding = string | string[];


export default function handlePadding(prop: TPadding) {
    let padding: TStyledPadding = unit.em(16);

    if (prop !== undefined) {
        if (Array.isArray(prop)) {
            if (prop.length === 2) {
                padding = `${unit.em(prop[0])} ${unit.em(prop[1])}`;
            } else if (prop.length === 4) {
                padding = `${unit.em(prop[0])} ${unit.em(prop[1])} ${unit.em(prop[2])} ${unit.em(prop[3])}`;
            }
        } else if (!Array.isArray(prop)) {
            padding = unit.em(prop);
        }
    } else if (prop !== undefined && isNaN(prop)) {
        throw new Error(`'padding' must be a number`)
    } else {
        padding = unit.em(16);
    }

    return padding;
};
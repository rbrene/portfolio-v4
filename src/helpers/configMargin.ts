import { unit } from '.';


type TMargin = number | [number, number];
type TSMargin = string | [string, string];

export default function configMargin(prop: TMargin) {
    let marginblock: TSMargin | undefined = undefined;

    if (prop !== undefined) {
        if (Array.isArray(prop)) {
            if (prop.length === 2) {
                marginblock = `${unit.em(prop[0])} ${unit.em(prop[1])}`;
            }
        } else if (!Array.isArray(prop)) {
            marginblock = unit.em(prop)
        }
    }

    return marginblock;
}
import { useState, useEffect } from 'react';
import { dimensions } from '../helpers';
import { useDevice } from '.';


function configPadding(device: number) {
    let padding: number = 16;

    if (device <= dimensions.mobile - 0.2 || device <= dimensions.tablet - 0.2) {
        padding = 16;
    } else if (device >= dimensions.tablet && device <= dimensions.hd - 0.2) {
        padding = 64;
    } else if (device >= dimensions.hd) {
        padding = 96;
    }

    return padding;
}


export default function useHook() {
    const device = useDevice();
    const [padding, setPadding] = useState<number>(configPadding(device));

    useEffect(() => {
        setPadding(configPadding(device));
    }, [device]);

    return padding;
};

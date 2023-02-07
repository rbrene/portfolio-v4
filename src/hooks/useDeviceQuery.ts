import { useLayoutEffect, useState } from 'react';
import { checkDevice } from '../helpers/checkDevice';


type StateTypes = 'mobile' | 'tablet' | 'desktop' | void;


export function useDeviceQuery() {
    const [device, setDevice] = useState<StateTypes>(checkDevice);

    useLayoutEffect(() => {
        setDevice(checkDevice);

        window.addEventListener('resize', () => {
            setDevice(checkDevice);
        })
    }, [])

    return device;
}
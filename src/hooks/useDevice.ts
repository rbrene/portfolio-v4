import { useLayoutEffect, useState } from 'react';


export default function useHook() {
    const deviceSize = () => window.innerWidth;
    const [device, setDevice] = useState(deviceSize);

    useLayoutEffect(() => {
        const checkDevice = () => setDevice(deviceSize);

        window.addEventListener('resize', checkDevice);

        return () => {
            window.removeEventListener('resize', checkDevice);
        }
    }, []);

    return device;
};
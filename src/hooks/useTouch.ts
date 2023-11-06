import { useState } from 'react';


export default function useHook() {
    const [touch, setTouch] = useState<boolean>(false);
    const touchStart = () => setTouch(true);
    const touchEnd = () => setTouch(false);

    return { touch, touchStart, touchEnd };
}
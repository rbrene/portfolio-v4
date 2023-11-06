import { useState } from 'react';


export default function useHook() {
    const [hover, setHover] = useState<boolean>(false);
    const mouseEnter = () => setHover(true);
    const mouseLeave = () => setHover(false);

    return { hover, mouseEnter, mouseLeave };
}
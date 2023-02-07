import { useState } from 'react';


export function useHover() {
    const [hover, setHover] = useState<boolean>(false);
    const mouseEnter = (e: React.MouseEvent) => setHover(true);
    const mouseLeave = (e: React.MouseEvent) => setHover(false);

    return { hover, mouseEnter, mouseLeave }
}
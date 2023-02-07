import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PortalProps } from '../../types/components/portal';
import { portalRoot } from '../../constants';


export const Portal: React.FC<PortalProps> = ({ children }) => {
    const node = document.createElement('div');

    useEffect(() => {
        if (portalRoot && node) portalRoot.appendChild(node);

        return () => {
            portalRoot.removeChild(node);
        }
    }, [node]);

    return node ? createPortal(children, node) : null
}
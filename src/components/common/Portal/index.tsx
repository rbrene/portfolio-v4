import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PortalProps as Props } from './types';
import { PortalRoot } from '../../../constants';


const Component: React.FC<Props> = ({ children }) => {
    const Node = document.createElement('div');

    useEffect(() => {
        if (PortalRoot && Node) {
            PortalRoot.appendChild(Node);
        }

        return () => {
            PortalRoot.removeChild(Node);
        }
    }, [Node]);

    return Node ? createPortal(children, Node) : null;
};

export default Component;
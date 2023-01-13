import { useRef } from 'react';
import { SectionsContext } from './context';


type SectionRef = HTMLElement | HTMLDivElement;

interface Props {
    children: React.ReactElement | React.ReactNode | React.ReactElement[] | React.ReactNode[];
}

export function SectionRefs({ children }: Props) {
    const context = {
        refs: {
            home: useRef<SectionRef>(null),
            about: useRef<SectionRef>(null),
            portfolio: useRef<SectionRef>(null),
            contact: useRef<SectionRef>(null),
        }
    }

    return (
        <SectionsContext.Provider value={context}>
            {children}
        </SectionsContext.Provider>
    )
}
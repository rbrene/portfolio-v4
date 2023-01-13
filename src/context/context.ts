import { createContext } from 'react';


type SectionRef = HTMLElement | HTMLDivElement;

interface SectionsContextProps {
    refs: {
        home: React.RefObject<SectionRef>,
        about: React.RefObject<SectionRef>,
        portfolio: React.RefObject<SectionRef>,
        contact: React.RefObject<SectionRef>,
    }
}


export const SectionsContext = createContext<SectionsContextProps | null>(null);
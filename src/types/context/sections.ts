export type SectionRef = HTMLElement | HTMLDivElement;

export interface SectionsContextProps {
    refs: {
        home: React.RefObject<SectionRef>,
        info: React.RefObject<SectionRef>,
        projects: React.RefObject<SectionRef>,
        contact: React.RefObject<SectionRef>,
    }
};
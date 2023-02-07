import { useRef } from 'react';
import { SectionContextComponentProps } from '../../types/components/section';
import { SectionRef } from '../../types/context/sections';
import { SectionsContext } from '../../context';


export const Sections: React.FC<SectionContextComponentProps> = ({ children }) => {
    const context = {
        refs: {
            home: useRef<SectionRef>(null),
            info: useRef<SectionRef>(null),
            projects: useRef<SectionRef>(null),
            contact: useRef<SectionRef>(null),
        }
    }

    return (
        <SectionsContext.Provider value={context}>
            {children}
        </SectionsContext.Provider>
    );
}
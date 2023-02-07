import { forwardRef } from 'react';
import { SectionProps } from '../../../types/components/section';
import { SectionRef } from '../../../types/context/sections';
import { Section as Element } from '../../../styles/components/common/section';


export const Section = forwardRef<SectionRef, SectionProps>(({ id, children }, ref?) => {
    return (
        <Element
            id={id}
            ref={ref}
        >
            {children}
        </Element>
    )
})
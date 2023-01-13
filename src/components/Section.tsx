import { forwardRef } from 'react';
import { Section as Element } from '../styled-components/index';


type SectionRef = HTMLElement | HTMLDivElement;

interface Props {
    id?: string | number;
    children: string | string[] | React.ReactElement | React.ReactNode | React.ReactElement[] | React.ReactNode[];
}

export const Section = forwardRef<SectionRef, Props>(({ id, children }, ref?) => {
    return (
        <Element id={id} ref={ref}>
            {children}
        </Element>
    )
})
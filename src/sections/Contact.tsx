import React from 'react';
import { SectionsContext } from '../context/context';
import { Section } from '../components/Section';
import { ContactArticle } from '../styled-components/layouts/articles/index';
import SectionHeading from '../components/Headings/SectionHeading';
import { ContactSVG } from '../components/Headings/SVG';
import ContactFlexLayout from '../styled-components/layouts/flex/contact';
import { ContactContainer } from '../styled-components/layouts/containers/index';
import ContactForm from '../components/ContactForm';


const Contact = () => {
    const { refs } = React.useContext(SectionsContext)!;
    return (
        <Section id='contact' ref={refs.contact}>
            <ContactArticle>
                <ContactFlexLayout>
                    <ContactContainer>
                        <SectionHeading word='me' highlight='contact' reverse={true} />
                        <ContactForm />
                    </ContactContainer>
                    <ContactSVG />
                </ContactFlexLayout>
            </ContactArticle>
        </Section>
    )
}

export default Contact;
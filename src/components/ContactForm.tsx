import { useState, useRef } from 'react';
import { FormStateProps, FormErrorsStateProps } from '../interfaces/interfaces';
import { checkErrors } from '../helpers/validateForm';
import validate from '../helpers/validateForm';
import emailjs from '@emailjs/browser';
import { ContactFormGrid } from '../styled-components/layouts/grids/index';
import { FormContainer } from '../styled-components/layouts/containers/index';
import { Form, FormField, Label, Error, Input, Textarea } from '../styled-components/components/Forms';
import { Submit } from '../styled-components/components/Buttons';
import SuccessModal from '../components/Modals/Success';


const ContactForm = () => {
    const form = useRef<HTMLFormElement>();
    const [success, setSuccess] = useState<boolean>(false);
    const [errors, setErrors] = useState<FormErrorsStateProps>({
        fullName: {
            status: false,
            message: ''
        },
        email: {
            status: false,
            message: ''
        },
        subject: {
            status: false,
            message: ''
        },
        message: {
            status: false,
            message: ''
        }
});
    const [formData, setFormData] = useState<FormStateProps>({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    }

    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors(validate(formData));
        checkErrors(formData)

        const serviceID = `${process.env.REACT_APP_EMAIL_SERVICE_ID}`;
        const templateID = `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`;
        const publicKey = `${process.env.REACT_APP_EMAIL_PUBLIC_KEY}`;

        if (checkErrors(formData) === true) {
            emailjs.sendForm(serviceID, templateID, (form.current as HTMLFormElement), publicKey)
            .then((result) => {
                if (result.text === 'OK') {
                    setSuccess(true);
                    setFormData({
                        fullName: '',
                        email: '',
                        subject: '',
                        message: ''
                    })
                } else {
                    setSuccess(false);
                }
            }, (error) => {
                console.log(error.text);
            })
        }

    }

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit} ref={form}>
                <ContactFormGrid>
                    <FormField>
                        <Label htmlFor='fullName'>
                            Full Name
                            <Error>{errors.fullName.message}</Error>
                        </Label>
                        <Input
                            type='text'
                            name='fullName'
                            id='fullName'
                            value={formData.fullName}
                            onChange={handleChange}
                            data-error={errors.fullName.status}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor='email'>
                            Email Address
                            <Error>{errors.email.message}</Error>
                        </Label>
                        <Input
                            type='email'
                            name='email'
                            id='email'
                            value={formData.email}
                            onChange={handleChange}
                            data-error={errors.email.status}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor='subject'>
                            Subject
                            <Error>{errors.subject.message}</Error>
                        </Label>
                        <Input
                            type='text'
                            name='subject'
                            id='subject'
                            value={formData.subject}
                            onChange={handleChange}
                            data-error={errors.subject.status}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor='message'>
                            Message
                            <Error>{errors.message.message}</Error>
                        </Label>
                        <Textarea
                            name='message'
                            id='message'
                            value={formData.message}
                            onChange={handleChange}
                            data-error={errors.message.status}
                        />
                    </FormField>
                    <FormField>
                        <Submit type='submit' children='Send Message' />
                    </FormField>
                </ContactFormGrid>
            </Form>
            <SuccessModal success={success} setSuccess={setSuccess} />
        </FormContainer>
    )
}

export default ContactForm;
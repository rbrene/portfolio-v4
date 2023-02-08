import { useContext, useState, useRef } from 'react';
import { SectionsContext } from '../../context';
import { Button } from '../../components/common/Buttons';
import { Section } from '../../components/common/Section';
import { useDeviceQuery } from '../../hooks/useDeviceQuery';
import { Error, Field, Form, Input, Label, Textarea } from '../../styles/components/common/forms';
import Article from '../../styles/layouts/articles';
import { FlexAlign, FlexColumn } from '../../styles/layouts/flex';
import { ContactGrid as Grid } from '../../styles/layouts/grids';
import { Padding, PaddingBlock } from '../../styles/utilities/padding';
import { DataProps } from '../../types/hook/forms';
import { checkForm, validate } from '../../helpers/validation';
import { Success } from '../../components/spec/Success';
import emailjs from '@emailjs/browser';
import { SVGHeading } from '../../components/common/SVGHeading';
import { Heading } from '../../components/common/Headings';
import { useInView } from 'react-intersection-observer';
import { useSpring } from '@react-spring/web';



export const Contact = () => {
    const device = useDeviceQuery();
    const { refs } = useContext(SectionsContext)!;
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const spring = useSpring({
        to: {
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 16
        },
        delay: 300
    });
    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState<DataProps>({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errorData, setErrorData] = useState<DataProps>({
        fullName: null,
        email: null,
        subject: null,
        message: null
    });
    const [send, setSend] = useState<boolean>(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => setSend(false);

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        setErrorData(validate(formData));
        const success = checkForm(errorData);

        const serviceID = `${process.env.REACT_APP_EMAIL_SERVICE_ID}`;
        const templateID = `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`;
        const publicKey = `${process.env.REACT_APP_EMAIL_PUBLIC_KEY}`;

        if (success) {
            emailjs.sendForm(serviceID, templateID, (form.current as HTMLFormElement), publicKey)
                .then((result) => {
                    if (result.text === 'OK') {
                        setSend(true);
                        setFormData({
                            fullName: '',
                            email: '',
                            subject: '',
                            message: ''
                        })
                    } else {
                        setSend(false);
                    }
                }, (error) => {
                    console.log(error.text);
                })
        }
    }

    return (
        <Section id='contact' ref={refs.contact}>

            <Grid id='contact-grid'>

                <Article id='contact-article' $height={100}>
                    <Padding $padding={device === 'mobile' ? 16 : 32}>
                        <FlexAlign $direction='column' $alignItems='start' $justifyContent='center'>
                            <Heading size='title'> Get In Touch </Heading>
                            <Heading size='h2'> Contact Me </Heading>
                            <Form onSubmit={submitForm} ref={form}>
                                <FlexColumn $gap={4} ref={ref} style={spring}>
                                    <Field>
                                        <PaddingBlock $block={8}>
                                            <FlexAlign $direction='column' $alignItems='start' $justifyContent='center' $gap={8}>
                                                <Label htmlFor='fullName'><span>Full Name</span> <Error>{errorData.fullName}</Error></Label>
                                                <Input
                                                    type='text'
                                                    name='fullName'
                                                    id='fullName'
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                />
                                            </FlexAlign>
                                        </PaddingBlock>
                                    </Field>
                                    <Field>
                                        <PaddingBlock $block={8}>
                                            <FlexAlign $direction='column' $alignItems='start' $justifyContent='center' $gap={8}>
                                                <Label htmlFor='email'><span>Email Address</span> <Error>{errorData.email}</Error></Label>
                                                <Input
                                                    type='email'
                                                    name='email'
                                                    id='email'
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </FlexAlign>
                                        </PaddingBlock>
                                    </Field>
                                    <Field>
                                        <PaddingBlock $block={8}>
                                            <FlexAlign $direction='column' $alignItems='start' $justifyContent='center' $gap={8}>
                                                <Label htmlFor='subject'><span>Subject</span> <Error>{errorData.subject}</Error></Label>
                                                <Input
                                                    type='text'
                                                    name='subject'
                                                    id='subject'
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                />
                                            </FlexAlign>
                                        </PaddingBlock>
                                    </Field>
                                    <Field>
                                        <PaddingBlock $block={8}>
                                            <FlexAlign $direction='column' $alignItems='start' $justifyContent='center' $gap={8}>
                                                <Label htmlFor='message'><span>Message</span> <Error>{errorData.message}</Error></Label>
                                                <Textarea
                                                    name='message'
                                                    id='message'
                                                    rows={10}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                />
                                            </FlexAlign>
                                        </PaddingBlock>
                                    </Field>
                                    <Field>
                                        <FlexAlign $direction='column' $alignItems='start' $justifyContent='center'>
                                            <Button variant='submit'> Send Message </Button>
                                        </FlexAlign>
                                    </Field>
                                </FlexColumn>
                            </Form>
                        </FlexAlign>
                    </Padding>
                </Article>

                <Success toggle={send} close={closeModal} />

                <SVGHeading variant='contact' />

            </Grid>
        </Section>
    )
}
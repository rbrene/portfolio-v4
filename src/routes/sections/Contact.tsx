import { useContext, useState, useRef } from 'react';
import { SectionsContext } from '../../context';
import { ReactComponent as ContactMe } from '../../assets/svg/contact.svg';
import { Submit } from '../../components/common/Buttons';
import { Section } from '../../components/common/Section';
import { useDeviceQuery } from '../../hooks/useDeviceQuery';
import { Error, Field, Form, Input, Label, Textarea } from '../../styles/components/common/forms';
import { H2, Title } from '../../styles/global/typography';
import Article from '../../styles/layouts/articles';
import { SVGContainer as Container } from '../../styles/layouts/containers';
import { FlexAlign, FlexCenter, FlexColumn } from '../../styles/layouts/flex';
import { ContactGrid as Grid } from '../../styles/layouts/grids';
import { Padding, PaddingBlock, PaddingCustom } from '../../styles/utilities/padding';
import { DataProps } from '../../types/hook/forms';
import { checkForm, validate } from '../../helpers/validation';
import { Success } from '../../components/spec/Success';
import emailjs from '@emailjs/browser';


export const Contact = () => {
    const device = useDeviceQuery();
    const { refs } = useContext(SectionsContext)!;
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
                            <Title> Get In Touch </Title>
                            <H2> Contact Me </H2>
                            <Form onSubmit={submitForm} ref={form}>
                                <FlexColumn $gap={4}>
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
                                            <Submit> Send Message </Submit>
                                        </FlexAlign>
                                    </Field>
                                </FlexColumn>
                            </Form>
                        </FlexAlign>
                    </Padding>
                </Article>

                <Success toggle={send} close={closeModal} />

                <Container>
                    <PaddingCustom $block={device === 'mobile' ? 16 : 32} $inline={device === 'mobile' ? 8 : 32}>
                        <FlexCenter>
                            <ContactMe />
                        </FlexCenter>
                    </PaddingCustom>
                </Container>

            </Grid>
        </Section>
    )
}
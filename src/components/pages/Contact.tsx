import React from 'react';
import { Content, FlexLayout, Link, Padding, Section, Typography } from '..';
import { usePadding } from '../../hooks';
import { unit } from '../../helpers';


const Page = () => {
    const padding = usePadding();

    return (
        <Section id='contact' background='var(--primary-minor)'>
            <Padding padding={[128, padding]}>
                <FlexLayout.FlexCenter>
                    <Content width={unit.rem(1440)} height='100%'>
                        <FlexLayout.FlexCenter gap={16}>
                            <div>
                                <FlexLayout.FlexCenter>
                                    <Typography.Title children='Contact Me' />
                                    <Typography.H2 children='Convinced Yet?' />
                                </FlexLayout.FlexCenter>
                            </div>
                            <div>
                                <Typography.P
                                    width={60}
                                    align='center'
                                    text='Weather you have a project in mind or just interested in chatting, I would love to hear from you. Get in touch with me or we can work together on your digital presence.'
                                />
                            </div>
                            <div>
                                <Link type='mailto' title='Send me a message' email='rbrene786@gmail.com' />
                            </div>
                        </FlexLayout.FlexCenter>
                    </Content>
                </FlexLayout.FlexCenter>
            </Padding>
        </Section>
    )
};

export default Page;
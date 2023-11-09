import React from 'react';
import { Content, FlexLayout, Link, Padding, Section, Typography } from '..';
import { useDevice, usePadding } from '../../hooks';
import { dimensions, unit } from '../../helpers';
import { cv } from '../../assets/files';


const Page = () => {
    const padding = usePadding();
    const device = useDevice();
    const deviceQuery = device <= dimensions.tablet - .2;

    return (
        <Section id='about' background='var(--primary-main)'>
            <Padding padding={[128, padding]}>
                <FlexLayout.FlexCenter>
                    <Content width={unit.rem(1440)} height='100%'>
                        <FlexLayout.Flex
                            direction='column'
                            justifycontent='center'
                            gap={16}
                        >
                            <div>
                                <FlexLayout.Flex direction='column' alignitems={deviceQuery ? 'start' : 'start'} justifycontent='center'>
                                    <Typography.Title title='About Me' />
                                    <Typography.H2 title='Who Am I' />
                                </FlexLayout.Flex>
                            </div>
                            <div>
                                <Typography.P
                                    width={55}
                                    align={deviceQuery ? 'left' : 'left'}
                                    text='I am a passionate front-end web developer with a love for crafting captivating digital experiences, good web design and bringing form and function to the web.'
                                />
                                <Typography.P
                                    marginblock={[8, 0]}
                                    width={55}
                                    align={deviceQuery ? 'left' : 'left'}
                                    text='As a Muslim my service lies in the establishment or elevation of the digital presences of businesses or organization’s that benefits or provides a positive impact on society or communities.'
                                />
                            </div>
                            <div>
                                <Link type='download' title='Download CV' file={cv} />
                            </div>
                        </FlexLayout.Flex>
                    </Content>
                </FlexLayout.FlexCenter>
            </Padding>
        </Section>
    )
};

export default Page;
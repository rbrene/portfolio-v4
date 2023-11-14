import React from 'react';
import { Background, Container, Content, FlexLayout, Padding, Section, Typography } from '..';
import { useDevice, usePadding } from '../../hooks';
import { dimensions, unit } from '../../helpers';
import { raeesbrene } from '../../assets/images';


const Page = () => {
    const padding = usePadding();
    const device = useDevice();
    const deviceQuery = device <= dimensions.tablet - .2;

    return (
        <Section id='hero'>
            <Container position='fixed' inset={0}>
                <FlexLayout.FlexCenter>
                    <Content as='div' width={unit.rem(1440)} height='100%'>
                        <Background
                            src={raeesbrene}
                            size='contain'
                            position='center right'
                            color='var(--primary-minor)'
                            blend='soft-light'
                            opacity={deviceQuery ? 0.2 : 1}
                        />
                    </Content>
                </FlexLayout.FlexCenter>
            </Container>
            <Padding padding={[0, padding]}>
                <FlexLayout.FlexCenter>
                    <Content width={unit.rem(1440)} height='100%'>
                        <FlexLayout.Flex
                            direction='column'
                            alignitems='start'
                            justifycontent='center'
                        >
                            <div>
                                <Typography.H1
                                    title='Boost your digital presence'
                                />
                            </div>
                        </FlexLayout.Flex>
                    </Content>
                </FlexLayout.FlexCenter>
            </Padding>
        </Section>
    )
};

export default Page;
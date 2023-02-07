import { useTransition } from '@react-spring/web';
import React from 'react';
import { BiMailSend } from 'react-icons/bi';
import { Backdrop, Modal } from '../../../styles/components/common/modals';
import { Layout, Message, SVG, Wrapper } from '../../../styles/components/spec/success';
import { FlexCenter } from '../../../styles/layouts/flex';
import { Padding } from '../../../styles/utilities/padding';
import { Button } from '../../common/Buttons';
import { Portal } from '../../common/Portal';


interface Props {
    toggle: boolean;
    close: React.MouseEventHandler<HTMLButtonElement>;
}

export const Success: React.FC<Props> = ({ toggle, close }) => {
    const transition = useTransition(toggle, {
        from: {
            opacity: 0,
            scale: 0.8
        },
        enter: {
            opacity: 1,
            scale: 1
        },
        leave: {
            opacity: 0,
            scale: 0.8
        },
        config: {
            mass: 5,
            tension: 350,
            friction: 40
        }
    })
    return (
        <Portal>
            {
                transition((item, _, props) => {
                    return props.item ? (

                        <Modal>
                            <Backdrop>
                                <FlexCenter>
                                    <Wrapper style={item}>
                                        <Padding $padding={32}>
                                            <Layout>
                                                <SVG>
                                                    <FlexCenter>
                                                        <BiMailSend />
                                                    </FlexCenter>
                                                </SVG>
                                                <Padding>
                                                    <FlexCenter $gap={16}>
                                                        <Message> Your Message has been sent. Thank you for submitting  </Message>
                                                        <Button
                                                            variant='primary'
                                                            onClick={close}
                                                        > Close </Button>
                                                    </FlexCenter>
                                                </Padding>
                                            </Layout>
                                        </Padding>
                                    </Wrapper>
                                </FlexCenter>
                            </Backdrop>
                        </Modal>
                    ) : null
                })
            }
        </Portal>
    )
}
import React from 'react';
import { createPortal } from 'react-dom';
import { FormSuccessProps } from '../../interfaces/interfaces';
import { Modal, Backdrop } from '../../styled-components/components/Modals';
import { H4, Small, SuccessMessage } from '../../styled-components/global/Typography';
import { Success } from '../../styled-components/components/Forms';
import { SuccessButton } from '../../styled-components/components/Buttons';
import { useSpring, useTransition } from '@react-spring/web';


const SuccessModal = ({ success, setSuccess }: FormSuccessProps) => {
    const portal: HTMLElement = document.getElementById('portal')!;

    const transition = useTransition(success, {
        from: { 
            opacity: 0,
        },
        enter: { 
            opacity: 1,
        },
        leave: { 
            opacity: 0,
        },
    });

    const spring = useSpring({
        to: {
            opacity: success ? 1 : 0,
            transformOrigin: success ? 'bottom' : 'top',
            y: success ? 0 : -32,
            scaleX: success ? 1 : 0
        },
        delay: 700
    })

    const modal = transition((style) => (
        <Modal style={style}>
            <Backdrop>
                <Success style={spring}>
                    <H4>Success! <Small>🎊</Small></H4>
                    <SuccessMessage> Your message has been sent </SuccessMessage>
                    <SuccessButton onClick={() => setSuccess(false)}> OK </SuccessButton>
                </Success>
            </Backdrop>
        </Modal>
    ))

    if (success !== true) {
        return null;
    }
    else {
        return createPortal(modal, portal);
    }
}

export default SuccessModal;
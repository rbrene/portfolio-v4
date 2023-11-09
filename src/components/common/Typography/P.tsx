import React from 'react';
import { ICParagraph } from './types';
import * as Element from './styles';
import { configMargin } from '../../../helpers';
import { useInView } from 'react-intersection-observer';
import { CLoader } from '../../context';
import { useSpring } from 'react-spring';


const Component: React.FC<ICParagraph> = ({ marginblock, width, align, children, text }) => {
    const margins = marginblock === undefined ? undefined : configMargin(marginblock);

    if (text && children) {
        throw new Error(`'children' and 'text' prop cannot be defined at the same time`)
    };
    const { transition } = React.useContext(CLoader);
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    });
    const [spring, api] = useSpring(() => ({
        from: {
            opacity: 0
        }
    }));

    React.useEffect(() => {
        if (transition === true) {
            if (inView) {
                api.start({
                    opacity: 1
                })
            } else if (!inView) {
                api.start({
                    opacity: 0
                })
            }
        }
    }, [api, inView, transition]);

    return (
        <Element.SCP
            ref={ref}
            $marginblock={margins}
            $width={width}
            $align={align}
            style={spring}
        >
            {text ? text : children}
        </Element.SCP>
    );
};

export default Component;
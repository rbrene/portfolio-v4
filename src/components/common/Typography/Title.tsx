import React from 'react';
import * as Element from './styles';
import { ICHeading } from './types';
import { useInView } from 'react-intersection-observer';
import { CLoader } from '../../context';
import { useSpring } from 'react-spring';


const Component: React.FC<ICHeading> = ({ children, title }) => {
    if (title && children) throw new Error(`'children' and 'title' prop cannot be defined at the same time`);
    const { transition } = React.useContext(CLoader);
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    });
    const [spring, api] = useSpring(() => ({
        from: {
            y: '100%',
            opacity: 0
        }
    }));

    React.useEffect(() => {
        if (transition === true) {
            if (inView) {
                api.start({
                    y: '0%',
                    opacity: 1
                })
            } else if (!inView) {
                api.start({
                    y: '100%',
                    opacity: 0
                })
            }
        }
    }, [api, inView, transition]);

    return (
        <Element.SCTitle ref={ref}>
            <Element.SCWordContainer>
                <Element.SCWord children={title ? title : children} style={spring} />
            </Element.SCWordContainer>
        </Element.SCTitle>
    );
};

export default Component;
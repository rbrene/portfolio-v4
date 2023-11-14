import React from 'react';
import { ICHeading } from './types';
import { SCH2, SCWord, SCWordContainer } from './styles';
import { useInView } from 'react-intersection-observer';
import { CLoader } from '../../context';
import { useSpring } from 'react-spring';


const Component: React.FC<ICHeading> = ({ children, title }) => {
    if (title && children) throw new Error(`'children' and 'title' prop cannot be defined at the same time`);
    const { transition } = React.useContext(CLoader);
    const { ref, inView } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });
    const [spring, api] = useSpring(() => ({
        from: {
            rotateX: 90,
            y: '-100%',
            opacity: 0
        }
    }));

    React.useEffect(() => {
        if (transition === true) {
            if (inView) {
                api.start({
                    rotateX: 0,
                    y: '0%',
                    opacity: 1
                })
            } else if (!inView) {
                api.start({
                    rotateX: 0,
                    y: '-100%',
                    opacity: 0
                })
            }
        }
    }, [api, inView, transition]);

    return (
        <SCH2 ref={ref}>
            <SCWordContainer>
                <SCWord children={title ? title : children} style={spring} />
            </SCWordContainer>
        </SCH2>
    );
};

export default Component;
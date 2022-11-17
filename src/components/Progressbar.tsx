import React from 'react';
import { Wrapper, Progress, Bar } from '../styled-components/components/Progress';
import { useSpring } from '@react-spring/web';


const Loader = () => {
    
    const spring = useSpring({
        from: {
            width: '0%'
        },
        to: {
            width: '100%'
        },
        config: {
            duration: 3000
        }
    })

    return (
        <Wrapper>
            <Progress>
                <Bar style={spring} />
            </Progress>
        </Wrapper>
    )
}

export default Loader;
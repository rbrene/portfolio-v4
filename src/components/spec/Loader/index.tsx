import React from 'react';
import { Dot, Wrapper } from '../../../styles/components/spec/loader';
import { FixedContainer } from '../../../styles/layouts/containers';
import { FlexAlign } from '../../../styles/layouts/flex';
import { useTrail } from '@react-spring/web';


export const Loader = () => {
    const trail = useTrail(3, {
        loop: true,
        from: {
            scale: 0
        },
        to: {
            scale: 1
        },
        config: {
            mass: 5,
            tension: 350,
            friction: 40
        }
    });

    return (
        <FixedContainer>
            <FlexAlign $alignItems='center' $justifyContent='center'>
                <Wrapper>
                    <FlexAlign>
                        {trail.map(item => <Dot style={item} />)}
                    </FlexAlign>
                </Wrapper>
            </FlexAlign>
        </FixedContainer>
    )
}
import React from 'react';
import { BackgroundImageProps } from '../interfaces/interfaces';
import { BackgroundImageContainer } from '../styled-components/components/Images';
import { useInView } from 'react-intersection-observer';
import { useSpring } from '@react-spring/web';


const BackgroundImage = ({ src }: BackgroundImageProps) => {
    const { ref, entry } = useInView({
        threshold: 0.2
    })


    const spring = useSpring({
        opacity: entry?.isIntersecting ? 0.25 : 0
    })

    return (
        <BackgroundImageContainer
            ref={ref}
            style={spring}
            $bg={src}
        />
    )
}

export default BackgroundImage;
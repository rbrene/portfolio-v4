import * as React from 'react';
import { useDevice } from '../../../hooks';
import { FaGithub, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { dimensions } from '../../../helpers';
import { Element } from './styles';
import { ISocialItem } from './types';
import { useSpring } from 'react-spring';


const Item: React.FC<ISocialItem> = ({ title, path }) => {
    const [{ scale, y }, api] = useSpring(() => ({
        scale: 1,
        y: 0,
    }));

    const mouseenter = () => {
        api.start({
            scale: 1.1,
            y: -8,
        });
    };

    const mouseleave = () => {
        api.start({
            scale: 1,
            y: 0,
        })
    };

    return (
        <Element.LI
            onMouseEnter={mouseenter}
            onMouseLeave={mouseleave}
            style={{ scale, y }}
        >
            <Element.A
                href={path}
                target='_blank'
                children={title}
                rel='noreferrer'
            />
        </Element.LI>
    )
}


const Component: React.FC = () => {
    const device = useDevice();
    const deviceQuery = device <= dimensions.desktop - .2;

    return !deviceQuery ? (
        <Element.SocialMedia>
            <Element.Layout>
                <Element.UL>
                    <Item path='mailto:rbrene786@gmail.com' title={<FaEnvelope />} />
                    <Item path='https://github.com/rbrene' title={<FaGithub />} />
                    <Item path='https://twitter.com/rbrene786' title={<FaTwitter />} />
                    <Item path='https://instagram.com/ra.brene/' title={<FaInstagram />} />
                </Element.UL>
                <Element.Line />
            </Element.Layout>
        </Element.SocialMedia>
    ) : null;
};

export default Component;
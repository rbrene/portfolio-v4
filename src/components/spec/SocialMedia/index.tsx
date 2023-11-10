import * as React from 'react';
import { useDevice } from '../../../hooks';
import { dimensions } from '../../../helpers';
import { Element } from './styles';
import { ISocialItem } from './types';
import { useSpring, useTrail, config } from 'react-spring';
import { data } from '../../../data';
import { CLoader } from '../../context';


const Item: React.FC<ISocialItem> = ({ title, path, trail }) => {
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
            style={trail}
        >
            <Element.A
                href={path}
                target='_blank'
                rel='noreferrer'
                children={title}
                style={{ scale, y }}
            />
        </Element.LI>
    )
}


const Component: React.FC = () => {
    const { transition } = React.useContext(CLoader);
    const [startTrail, setStartTrail] = React.useState(false);
    const device = useDevice();
    const deviceQuery = device <= dimensions.desktop - .2;
    const { socialMedia } = data;
    const { scaleY } = useSpring({
        scaleY: transition ? 1 : 0,
        config: {
            duration: 500
        },
        onRest: () => {
            setStartTrail(true)
        }
    });

    const trail = useTrail(socialMedia.length, {
        from: {
            y: 32,
            scale: 0
        },
        to: {
            y: startTrail ? 0 : 32,
            scale: startTrail ? 1 : 0
        },
        config: config.gentle
    })

    return !deviceQuery ? (
        <Element.SocialMedia>
            <Element.Layout>
                <Element.UL>
                    {trail.map((spring, key) => {
                        const { id, path, Icon } = socialMedia[key];
                        return <Item key={id} path={path} title={<Icon />} trail={spring} />
                    })}
                </Element.UL>
                <Element.Line style={{ scaleY }} />
            </Element.Layout>
        </Element.SocialMedia>
    ) : null;
};

export default Component;
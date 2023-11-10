import * as React from 'react';
import { IDownloadLink, IMailToLink, ILink } from './types';
import { Element } from './styles';
import { useInView } from 'react-intersection-observer';
import { CLoader } from '../../context';
import { useSpring } from 'react-spring';


const Download: React.FC<IDownloadLink> = ({ title, file }) => {
    const { transition } = React.useContext(CLoader);
    const { ref, inView } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });
    const [spring, api] = useSpring(() => ({
        from: {
            opacity: 0,
        }
    }));

    const mouseenter = () => {
        api.start({
            opacity: 0.8
        })
    };

    const mouseleave = () => {
        api.start({
            opacity: 1
        })
    };


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
        <Element.A
            ref={ref}
            href={file}
            children={title}
            style={spring}
            onMouseEnter={mouseenter}
            onMouseLeave={mouseleave}
            download
        />
    );
};

const MailTo: React.FC<IMailToLink> = ({ title, email }) => {
    const { transition } = React.useContext(CLoader);
    const { ref, inView } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });
    const [spring, api] = useSpring(() => ({
        from: {
            opacity: 0,
        }
    }));

    const mouseenter = () => {
        api.start({
            opacity: 0.8
        })
    };

    const mouseleave = () => {
        api.start({
            opacity: 1
        })
    };


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
        <Element.A
            ref={ref}
            href={`mailto:${email}`}
            children={title}
            style={spring}
            onMouseEnter={mouseenter}
            onMouseLeave={mouseleave}
        />
    );
};


const Component: React.FC<ILink> = ({ type, title, email, file }) => {

    switch (type) {
        case 'mailto':
            if (email === undefined) {
                throw new Error(`'email' prop must be defined`);
            } else {
                return <MailTo title={title} email={email!} />;
            }
        case 'download':
            if (file === undefined) {
                throw new Error(`'file' prop must be defined`)
            } else {
                return <Download title={title} file={file} />;
            }
        default:
            throw new Error(`'type' prop is not defined`)
    }
}

export default Component;
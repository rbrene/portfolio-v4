import * as React from 'react';
import { IRouterLink, IDownloadLink, IMailToLink, ITelLink, ILink } from './types';
import { Element } from './styles';
import { useInView } from 'react-intersection-observer';
import { CLoader } from '../../context';
import { useSpring } from 'react-spring';
import { color } from '../../../helpers';
;


const Route: React.FC<IRouterLink> = ({ title, path }) => {
    const { transition } = React.useContext(CLoader);
    const { ref, inView } = useInView({
        threshold: 1,
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


    const click = (e: React.MouseEvent) => {
        e.preventDefault();
    }

    return (
        <Element.A
            ref={ref}
            href={path}
            onClick={click}
            children={title}
            style={spring}
            onMouseEnter={mouseenter}
            onMouseLeave={mouseleave}
        />
    );
};

const Download: React.FC<IDownloadLink> = ({ title, file }) => {
    const { transition } = React.useContext(CLoader);
    const { ref, inView } = useInView({
        threshold: 1,
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
        threshold: 1,
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


const Tel: React.FC<ITelLink> = ({ title, tel }) => {
    const textFill = React.useMemo(() => new color(40, 100, 67), []);
    const { transition } = React.useContext(CLoader);
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    });
    const [spring, api] = useSpring(() => ({
        from: {
            opacity: 0,
            color: textFill.transitionAlpha(0),
            backgroundSize: '200%'
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
            href={`tel:${tel}`}
            children={title}
            style={spring}
            onMouseEnter={mouseenter}
            onMouseLeave={mouseleave}
        />
    );
};


const Component: React.FC<ILink> = ({ type, title, tel, email, file, path }) => {

    switch (type) {
        case 'mailto':
            if (email === undefined) {
                throw new Error(`'email' prop must be defined`);
            } else {
                return <MailTo title={title} email={email!} />;
            }
        case 'tel':
            if (tel === undefined) {
                throw new Error(`'tel' prop must be defined`)
            } else {
                return <Tel title={title} tel={tel} />;
            }
        case 'link':
            if (path === undefined) {
                throw new Error(`'path' prop must be defined`)
            } else {
                return <Route title={title} path={path} />;
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
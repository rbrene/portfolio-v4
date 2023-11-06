import * as React from 'react';
import { IRouterLink, IDownloadLink, IMailToLink, ITelLink, ILink } from './types';
import { Element } from './styles';


const Route: React.FC<IRouterLink> = ({ title, path }) => {

    const click = (e: React.MouseEvent) => {
        e.preventDefault();
    }

    return (
        <Element.A
            href={path}
            onClick={click}
        />
    );
};

const Download: React.FC<IDownloadLink> = ({ title, file }) => {
    return (
        <Element.A
            href={file}
            children={title}
            download
        />
    );
};

const MailTo: React.FC<IMailToLink> = ({ title, email }) => {
    return (
        <Element.A
            href={`mailto:${email}`}
            children={title}
        />
    );
};


const Tel: React.FC<ITelLink> = ({ title, tel }) => {
    return (
        <Element.A
            href={`tel:${tel}`}
            children={title}
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
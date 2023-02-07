import React from 'react';
import { LinkProps } from '../../../types/components/links';
import { Link as Element, RouterLink as LinkElement } from '../../../styles/components/common/links';


export const Link: React.FC<LinkProps> = ({ url, title }) => {
    return (
        <Element href={url} target='_blank' rel='noreferrer'> {title} </Element>
    )
};

export const RouterLink: React.FC<LinkProps> = ({ url, title }) => {
    return (
        <LinkElement to={url}> {title} </LinkElement>
    )
}
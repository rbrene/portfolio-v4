import React from 'react';
import { LinkPropsTypes } from '../../interfaces/interfaces';


const NavLink = ({ url, title }: LinkPropsTypes) => {
    return (
        <a href={url}> {title} </a>
    )
}

export default NavLink;
import React from 'react';
import { LinkPropsTypes } from '../../interfaces/interfaces';
import { Link } from '../../styled-components/components/Nav';


const NavLink = ({ url, title }: LinkPropsTypes) => {

    return (
        <Link href={url}> {title} </Link>
    )
}

export default NavLink;
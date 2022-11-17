import React from 'react';
import { Header as Wrapper } from '../styled-components/index';
import Navbar from '../components/Nav/Navbar';
import { NavbarLinks } from '../helpers/data';


const Header = () => {
    return (
        <Wrapper>
            <Navbar links={NavbarLinks} />
        </Wrapper>
    )
}

export default Header;
import React from 'react';
import { NavbarPropsTypes } from '../../interfaces/interfaces';
import { Nav, List, ListItem } from '../../styled-components/components/Nav';
import { useInView } from 'react-intersection-observer';
import { useTrail } from '@react-spring/web';


const Navbar = ({ links }: NavbarPropsTypes) => {
    const { ref, entry } = useInView({
        threshold: 0.8,
    })
    const trail = useTrail(links.length, {
        to: {
            opacity: entry?.isIntersecting ? 1 : 0,
            y: entry?.isIntersecting ? 0 : -16,
            rotateY: entry?.isIntersecting ? '0deg' : '90deg',
        },
        delay: 850
    })

    return (
        <Nav
            ref={ref}
        >
            <List>
                {
                    trail.map((props, index) => {
                        return (
                            <ListItem
                                key={links[index].id}
                                style={props}
                            >
                                {links[index].title}
                            </ListItem>
                        )
                    })
                }
            </List>
        </Nav>
    )
}

export default Navbar;
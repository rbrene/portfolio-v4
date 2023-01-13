import React from 'react';
import { SectionsContext } from '../../context/context';
import { NavbarPropsTypes } from '../../interfaces/interfaces';
import { Nav, List, ListItem } from '../../styled-components/components/Nav';
import { useInView } from 'react-intersection-observer';
import { useTrail } from '@react-spring/web';


const Navbar = ({ links }: NavbarPropsTypes) => {
    const { refs } = React.useContext(SectionsContext)!;
    const refsArray = Object.values(refs);
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
    const click = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement | HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }


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
                                onClick={(e: React.MouseEvent) => click(e, refsArray[index])}
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
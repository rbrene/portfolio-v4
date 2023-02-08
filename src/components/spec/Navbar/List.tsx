import { useContext } from 'react';
import { NavListProps } from '../../../types/components/nav';
import { NavUL } from '../../../styles/components/spec/nav';
import { useTrail } from '@react-spring/web';
import { SectionsContext } from '../../../context';
import { NavItem } from './Item';
import { FlexColumn } from '../../../styles/layouts/flex';
import { useDeviceQuery } from '../../../hooks/useDeviceQuery';


export const NavList: React.FC<NavListProps> = ({ items }) => {
    const { refs } = useContext(SectionsContext)!;
    const refsArray = Object.values(refs);
    const device = useDeviceQuery();

    const trail = useTrail(items.length, {
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: {
            mass: 5,
            tension: 350,
            friction: 40,
            delay: 250,
        }
    });
    const click = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement | HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    };


    return (
        <NavUL>
            <FlexColumn $gap={device === 'mobile' ? 4 : 8}>
                {
                    trail.map((props, index) => {
                        return (
                            <NavItem
                                key={index}
                                style={props}
                                onClick={(e: React.MouseEvent) => click(e, refsArray[index])}
                            >
                                {items[index]}
                            </NavItem>
                        )
                    })
                }
            </FlexColumn>
        </NavUL>
    )
}
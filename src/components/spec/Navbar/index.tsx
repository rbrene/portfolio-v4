import { NavData } from '../../../data/nav';
import { Header } from '../../../styles/components/common/header';
import { Nav } from '../../../styles/components/spec/nav';
import { Padding } from '../../../styles/utilities/padding';
import { NavList } from './List';


export const Navbar = () => {

    return (
        <Header>
            <Padding $padding={32}>
                <Nav>
                    <NavList items={NavData} />
                </Nav>
            </Padding>
        </Header>
    )
};

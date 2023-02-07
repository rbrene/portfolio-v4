import { NavItemProps } from '../../../types/components/nav';
import { NavLI } from '../../../styles/components/spec/nav';
import { PaddingBlock } from '../../../styles/utilities/padding';


export const NavItem: React.FC<NavItemProps> = ({ children, onClick, style }) => {

    return (
        <NavLI
            onClick={onClick}
            style={style}
        >
            <PaddingBlock $block={4}>
                {children}
            </PaddingBlock>
        </NavLI>
    )
}
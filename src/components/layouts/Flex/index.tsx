import React from 'react';
import { ICFlexCenterProps, ICFlexProps } from './types';
import Element from './styles';


const Flex: React.FC<ICFlexProps> = ({ direction, gap, wrap, alignitems, justifycontent, children }) => {
    return (
        <Element.Flex
            $direction={direction}
            $gap={gap}
            $wrap={wrap}
            $alignitems={alignitems}
            $justifycontent={justifycontent}
            children={children}
        />
    )
};


const Inline: React.FC<ICFlexProps> = ({ direction, gap, wrap, alignitems, justifycontent, children }) => {
    return (
        <Element.InlineFlex
            $direction={direction}
            $gap={gap}
            $wrap={wrap}
            $alignitems={alignitems}
            $justifycontent={justifycontent}
            children={children}
        />
    )
};

const FlexCenter: React.FC<ICFlexCenterProps> = ({ direction, gap, children }) => {
    return (
        <Element.FlexCenter $direction={direction} $gap={gap}>
            {children}
        </Element.FlexCenter>
    );
};


const Component = { Flex, Inline, FlexCenter, };

export default Component;
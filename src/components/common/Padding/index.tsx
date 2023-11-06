import React from 'react';
import { ICPadding } from './types';
import { SCPadding as Element } from './styles';
import { handlePadding } from '../../../helpers';


const Component: React.FC<ICPadding> = ({ padding, children }) => {
    const pad = handlePadding(padding!);

    return (
        <Element
            $padding={pad}
            children={children}
        />
    )
};

export default Component;
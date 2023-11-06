import React from 'react';
import { ICArticle } from './types';
import { SCArticle } from './styles';


const Component: React.FC<ICArticle> = ({ width, height, children, as }) => {

    return (
        <SCArticle
            $width={width}
            $height={height}
            children={children}
            as={as}
        />
    )
};

export default Component;
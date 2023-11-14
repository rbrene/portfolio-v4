import React from 'react';
import { ICHeadingOne } from './types';
import { SCH1, SCWord, SCWordContainer } from './styles';
import { useTrail } from 'react-spring';
import { CLoader } from '../../context';


const Component: React.FC<ICHeadingOne> = ({ children, title }) => {
    const { transition } = React.useContext(CLoader);
    if (title && children) throw new Error(`'children' and 'title' prop cannot be defined at the same time`);
    const wordsArray = title.split(' ');
    const trail = useTrail(wordsArray.length, {
        from: {
            rotateX: 90,
            y: '-100%',
            opacity: 0
        },
        to: {
            rotateX: transition === true ? 0 : 90,
            y: transition === true ? '0%' : '-100%',
            opacity: 1
        }
    });

    return (
        <SCH1>
            {trail.map((spring, key) => (
                <SCWordContainer key={key}>
                    <SCWord children={wordsArray[key]} style={spring} />
                </SCWordContainer>
            ))}
        </SCH1>
    );
};

export default Component;
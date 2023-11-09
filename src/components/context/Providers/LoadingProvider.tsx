import * as React from 'react';
import { ILoadingProvider } from './types';
import { CLoader } from '..';
import { Loader } from '../..';


const ContextComponent: React.FC<ILoadingProvider> = ({ children }) => {
    const [loading, setLoading] = React.useState(true);
    const [transition, setTransition] = React.useState<null | boolean>(false);

    const context = {
        loading: loading,
        transition: transition,
    };

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (loading) {
                setLoading(!loading);
                setTimeout(() => {
                    setTransition(!transition);
                }, 1500);
            }
        }, 2000)

        return () => {
            clearTimeout(timer);
        }

    }, [loading, transition])

    return (
        <CLoader.Provider value={context}>
            <Loader />
            {children}
        </CLoader.Provider>
    );
};

export default ContextComponent;
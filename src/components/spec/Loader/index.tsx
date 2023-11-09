import * as React from 'react';
import { Element } from './styles';
import { Content, FlexLayout } from '../..';
import { unit } from '../../../helpers';
import { config, useSpring } from 'react-spring';
import { CLoader } from '../../context';


const Component: React.FC = () => {
    const { loading } = React.useContext(CLoader);
    const [{ width, clipPath }, api] = useSpring(() => ({
        from: {
            width: '0%',
            clipPath: 'inset(0% 0 0% 0)',
        }
    }));

    React.useEffect(() => {
        if (loading) {
            api.start({
                width: '100%',
                config: {
                    duration: 2000
                }
            })
        } else if (!loading) {
            api.start({
                clipPath: 'inset(50% 0 50% 0)',
                config: config.slow
            })
        }
    }, [api, loading])

    return (
        <Element.Loader style={{ clipPath }}>
            <FlexLayout.FlexCenter>
                <Content width={unit.rem(1440)} height='100%'>
                    <FlexLayout.FlexCenter gap={16}>
                        <Element.Loading children='Hang on a second...' />
                        <Element.Progress>
                            <Element.ProgressBar style={{ width }} />
                        </Element.Progress>
                    </FlexLayout.FlexCenter>
                </Content>
            </FlexLayout.FlexCenter>
        </Element.Loader>
    );
};

export default Component;
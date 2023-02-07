import hexagonBackground from '../../../assets/images/hexagon-light.png';
import { BackgroundImage } from '../../../styles/components/common/images';
import { SVGBackgroundContainer } from '../../../styles/layouts/containers';


export const Hexagon = () => {
    return (
        <SVGBackgroundContainer>
            <BackgroundImage src={hexagonBackground} alt='hexagon-background' />
        </SVGBackgroundContainer>
    )
};
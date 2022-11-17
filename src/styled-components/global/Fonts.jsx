import { createGlobalStyle } from 'styled-components';

// Poppins Font
import poppinsThin from '../../assets/fonts/poppins/Poppins-Thin.ttf';
import poppinsExtraLight from '../../assets/fonts/poppins/Poppins-ExtraLight.ttf';
import poppinsLight from '../../assets/fonts/poppins/Poppins-Light.ttf';
import poppinsRegular from '../../assets/fonts/poppins/Poppins-Regular.ttf';
import poppinsMedium from '../../assets/fonts/poppins/Poppins-Medium.ttf';
import poppinsSemiBold from '../../assets/fonts/poppins/Poppins-SemiBold.ttf';
import poppinsBold from '../../assets/fonts/poppins/Poppins-Bold.ttf';
import poppinsExtraBold from '../../assets/fonts/poppins/Poppins-ExtraBold.ttf';
import poppinsBlack from '../../assets/fonts/poppins/Poppins-Black.ttf';

// Bebas Neue Font
import bebasBold from '../../assets/fonts/bebas_neue/BebasNeue-Bold.ttf';


const Fonts = createGlobalStyle`
@font-face {
    font-family: 'Poppins Thin';
    src: url(${poppinsThin}) format('truetype');
}

@font-face {
    font-family: 'Poppins ExtraLight';
    src: url(${poppinsExtraLight}) format('truetype');
}

@font-face {
    font-family: 'Poppins Light';
    src: url(${poppinsLight}) format('truetype');
}

@font-face {
    font-family: 'Poppins Regular';
    src: url(${poppinsRegular}) format('truetype');
}

@font-face {
    font-family: 'Poppins Medium';
    src: url(${poppinsMedium}) format('truetype');
}

@font-face {
    font-family: 'Poppins SemiBold';
    src: url(${poppinsSemiBold}) format('truetype');
}

@font-face {
    font-family: 'Poppins Bold';
    src: url(${poppinsBold}) format('truetype');
}

@font-face {
    font-family: 'Poppins ExtraBold';
    src: url(${poppinsExtraBold}) format('truetype');
}

@font-face {
    font-family: 'Poppins Thick';
    src: url(${poppinsBlack}) format('truetype');
}

@font-face {
    font-family: 'Bebas';
    src: url(${bebasBold}) format('truetype');
}

`;

export default Fonts;
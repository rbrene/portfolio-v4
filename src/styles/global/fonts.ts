import { createGlobalStyle } from 'styled-components';
import karla from '../../assets/fonts/karla/Karla-VariableFont_wght.ttf';
import montserrat from '../../assets/fonts/montserrat/Montserrat-VF.ttf';


const Fonts = createGlobalStyle`
@font-face {
    font-family: 'var-karla';
    src: url(${karla}) format('truetype');
};

@font-face {
    font-family: 'var-montserrat';
    src: url(${montserrat}) format('truetype');
}
`;

export default Fonts;
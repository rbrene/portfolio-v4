import { createGlobalStyle } from 'styled-components';


const Colors = createGlobalStyle`
:root {
    --primaryDark: #00171D;
    --primaryLight: #BFF2FF;
    --primaryLightHsl: 192.1875 100% 87%;
    --primaryAccent: #00C8FF;
    --primaryAccentHsl: 192 100% 50%;
    --primaryDarkAccent: #002934;
    --primaryLightAccent: #6BDFFF;
    --primaryButton: #006680;
    --primaryButtonAccent: #ABEEFF;
}
`;

export default Colors;
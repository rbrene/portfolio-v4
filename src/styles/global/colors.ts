import { createGlobalStyle } from 'styled-components';


const Colors = createGlobalStyle`
:root {
    --dark-primary: #00171D;
    --dark-primary-hsl: 192 100% 6%;
    --dark-accent: #005066;
    --dark-accent-hsl: 193 100% 20%;
    --light-primary: #BFF2FF;
    --light-primary-hsl: 192 100% 87%;
    --light-accent: #83e4ff;
    --light-accent-hsl: 193 100% 76%;
    --accent-primary: #007899;
    --accent-primary-hsl: 193 100% 30%;
    --accent-bright: #00c8ff;
    --accent-bright-hsl: 193 100% 50%;
    --accent-secondary: #009978;
    --accent-secondary-hsl: 167 100% 30%;
    --accent-secondary-bright: #04ffc9;

    /* Gradients */
    --primary-gradient: radial-gradient(circle at bottom right, var(--dark-accent) -50%, var(--accent-primary) 100%);
}

`;

export default Colors;
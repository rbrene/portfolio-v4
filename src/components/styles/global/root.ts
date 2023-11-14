import { createGlobalStyle } from 'styled-components';


const GlobalRoot = createGlobalStyle`
:root {
    /* 
    =================
    ---- Colours ----
    =================
    */
    --primary-main: hsl(40, 0%, 9%);
    --primary-main-hsl: 0, 0%, 8%;
    --primary-minor: hsl(40, 0%, 7%);
    --primary-minor-hsl: 0, 0%, 7%;
    --secondary-main: hsl(0, 0%, 97%);
    --secondary-main-hsl: 260, 100%, 97%;
    --secondary-minor: hsl(0, 0%, 100%);
    --secondary-minor-hsl: 260, 100%, 100%;
    --accent-main: hsl(40, 100%, 67%);
    --accent-main-hsl: 40, 100%, 67%;
    --accent-main-light: hsl(40, 100%, 90%);
    --accent-main-light-hsl: 40, 100%, 90%;
    --accent-primary: hsl(40, 48%, 67%);
    --accent-primary-hsl: 40, 48%, 67%;
    --accent-primary-dark: hsl(40, 48%, 43%);
    --accent-primary-dark-hsl: 40, 48%, 43%;

    /* 
    =======================
    ---- Font Families ----
    =======================
    */
    --font-montserrat: 'Montserrat', Helvetica, Arial, system-ui, sans-serif;
    --font-poppins: 'Poppins', Helvetica, Arial, system-ui, sans-serif;

    /* 
    ======================
    ---- Font Weights ----
    ======================
    */
    --fw-thin: 100;
    --fw-extralight: 200;
    --fw-light: 260;
    --fw-regular: 400;
    --fw-medium: 500;
    --fw-semibold: 600;
    --fw-bold: 700;
    --fw-extrabold: 800;
    --fw-black: 900;
}
`;
// Poppins - 400;600;800
// Clash Display - 900
export default GlobalRoot;
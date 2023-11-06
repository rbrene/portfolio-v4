import { createGlobalStyle } from 'styled-components';
import unit from '../../../helpers/units';


const GlobalStyleSheet = createGlobalStyle`
html {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 100%;
    font-synthesis: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    z-index: 0;
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

* {
    @supports (scroll-behaviour: smooth) {
        scroll-behavior: smooth;
    }
    &::-webkit-scrollbar {
        width: ${unit.rem(0)};
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-button {
        display: none;
    }

    &::-webkit-scrollbar-thumb {
        display: block;
        border-radius: ${unit.rem(50)};
    }
}

body {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: ${unit.rem(16)};
    font-family: var(--font-poppins);
    font-style: normal;
    font-weight: var(--fw-light);
    background-color: var(--primary-minor);
    color: var(--secondary-main);
    user-select: none;
    z-index: inherit;
}

#root {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
}
`;

export default GlobalStyleSheet;
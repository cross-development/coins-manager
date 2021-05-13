//Core
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Tahoma', 'Roboto', sans-serif;
    }

    body {
        width: 100%;
        min-height: 100vh;
    }

    input {
        &::placeholder {
            font: inherit;
            color: #9B9FAA;
        }

        &::-webkit-input-placeholder {
            opacity: 1;
            transition: opacity 0.3s ease;
        }

        &::-moz-placeholder {
            opacity: 1;
            transition: opacity 0.3s ease;
        }

        &:-moz-placeholder {
            opacity: 1;
            transition: opacity 0.3s ease;
        }

        &:-ms-input-placeholder {
            opacity: 1;
            transition: opacity 0.3s ease;
        }

        &:focus::-webkit-input-placeholder {
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        &:focus::-moz-placeholder {
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        &:focus:-moz-placeholder {
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        &:focus:-ms-input-placeholder {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`;

export const size = {
	mobile: '320px',
	tablet: '768px',
	desktop: '1280px',
	large: '1440px',
};

export const device = {
	mobile: `screen and (min-width: ${size.mobile})`,
	tablet: `screen and (min-width: ${size.tablet})`,
	desktop: `screen and (min-width: ${size.desktop})`,
	large: `screen and (min-width: ${size.large})`,
};

export default GlobalStyle;

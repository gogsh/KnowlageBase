import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
      font-family: 'Open Sans';
      color: ${props => props.theme.text};
    }
    body {
        height: 100%;
        width: 100%;
        background: ${props => props.theme.background};
      }
    ._app {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }

    ::-webkit-input-placeholder { /* Chrome */
      color: ${props => props.theme.placeholder};
    }
    :-ms-input-placeholder { /* IE 10+ */
      color: ${props => props.theme.placeholder};
    }
    ::-moz-placeholder { /* Firefox 19+ */
      color: ${props => props.theme.placeholder};
      opacity: 1;
    }
    :-moz-placeholder { /* Firefox 4 - 18 */
      color: ${props => props.theme.placeholder};
      opacity: 1;
    }
    [contenteditable]:focus {
      outline: 0px solid transparent;
    }
`

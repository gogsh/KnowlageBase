import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
      font-family: 'Open Sans';
    }
    body {
        height: 100%;
        width: 100%;
      }
    ._app {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
`

import { createGlobalStyle } from 'styled-components'
import OpenSansBold from './OpenSans-Bold.ttf'
import OpenSansRegular from './OpenSans-Regular.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: "Open-sans", sans-serif;
        src: url(${OpenSansRegular}) format("ttf");
        font-weight: normal;
        font-style: normal;
      }
    @font-face {
        font-family: "Open-sans", sans-serif;
        src: url(${OpenSansBold}) format("ttf");
        font-weight: bold;
        font-style: normal;
    }

`

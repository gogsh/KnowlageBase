import styled from 'styled-components'
import { constants } from '../../../styles/constants'

export const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  position: sticky;
  top: 0;
  margin: 30px 0 0 30px;
  textarea {
    width: 100%;
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
    background: white;
    line-height: 140%;
  }
  .ArticleBody__heading-input {
    width: 100%;
    font-size: 2em;
    background: none;
    font-weight: bold;
    border: none;
    height: 2em;
    outline: none;
  }
`

// background:${props=> props.theme.currentTheme.background};

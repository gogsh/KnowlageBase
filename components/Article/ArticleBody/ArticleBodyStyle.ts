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
  border-left: 1px solid ${props => props.theme.currentTheme.border};
  padding: 30px 0 0 30px;
  textarea {
    width: 100%;
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
    background: ${props => props.theme.currentTheme.background};
    line-height: 140%;
  }
`

export const ArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  align-items: center;
  width: 100%;

  .ArticleHeader__left-side {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .ArticleHeader__file-name-input {
    width: 100%;
    background: none;
    font-weight: bold;
    border: none;
    height: 2em;
    outline: none;
  }
`

export const ArticleLabel = styled.p`
  color: ${props => props.theme.currentTheme.label};
  white-space: nowrap;
`

export const СreateArticleWrapper = styled.div`
  display: flex;
  width: 300px;
  padding: 30%;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
`

export const MarkdownContainer = styled.div`
  opacity: ${props => props.opacity};
   img {
    max-width: 840px;
  }
`

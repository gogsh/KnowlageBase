import styled from 'styled-components'

/** Actibe link */
export const L = styled.a`
  font-size: 18px;
  cursor: pointer;
  color: ${props => props.theme.currentTheme.buttons.color.text.secondary};
  :hover {
    background: ${props => props.theme.currentTheme.buttons.color.background.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

/** Disabled link */
export const DL = styled.p`
  font-size: 18px;
  color: ${props => props.theme.currentTheme.buttons.color.text.disabled};
`

/** Selected link */
export const SL = styled.p`
  font-size: 18px;
  color: ${props => props.theme.currentTheme.text};
  font-weight: bold;
`

import styled from 'styled-components'
import { constants } from '../../../styles/constants'

export const DefaultButton = styled.button`
  width: 100%;
  color: ${props => props.theme.currentTheme.buttons.color.text[props.type]};
  background: ${props => props.theme.currentTheme.buttons.color.background[props.type]};
  font-size: ${props => constants.font[props.size]};
  padding: ${props => constants.buttonsPadding[props.size]};
  border-radius: ${constants.borderRadius};
  border: none;
  font-weight: ${props => props.type === 'primary' ? 'bold' : 'normal'};
  cursor: pointer;
`

export const LinkButton = styled.button`
  width: 100%;
  color: ${props => props.theme.currentTheme.buttons.color.text.link};
  background: none;
  border: none;
  cursor: pointer;
`

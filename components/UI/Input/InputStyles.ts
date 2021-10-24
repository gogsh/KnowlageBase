import styled from 'styled-components'
import { constants } from '../../../styles/constants'

export const DefaultInput = styled.input`
  background: ${props => props.theme.currentTheme.background} !important;
  outline: none;
  border: none;
  padding: ${props => constants.inputsPadding[props.size]};
  width: 100%;
  font-size: ${props => constants.font[props.size]};
`

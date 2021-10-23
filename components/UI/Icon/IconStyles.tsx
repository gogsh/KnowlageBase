import styled from 'styled-components'

export const Path = styled.path`
  fill: ${props => props.fill ? props.fill : props.theme.currentTheme.icons.primary};
`

export const Svg = styled.svg`
  cursor: pointer;
  &:hover ${Path} {
    fill: ${props => props.theme.currentTheme.icons.hover};
  }
`

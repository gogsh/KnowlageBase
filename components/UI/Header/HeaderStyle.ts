import styled from 'styled-components'


export const Wrapper = styled.header`
  width: 60%;
  margin-top: 40px;
  heigth: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid ${props => props.theme.currentTheme.border}
`

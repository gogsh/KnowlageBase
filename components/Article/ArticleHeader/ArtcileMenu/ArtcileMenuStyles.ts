import styled from 'styled-components'

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  gap: 16px;
`

export const HiddenMenuWrapper = styled.div`
  border-right: 1px solid ${props=>props.theme.currentTheme.border};
  display: flex;
  padding: 0 16px;
  align-items: center;
  flex-direction: row;
  gap: 24px;
`

import styled from 'styled-components'
import styleConstants from '../../styles/themes'

export const Wrapper = styled.div`
  color: ${props => props.theme.color};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin-top:40vh;
  gap: 26px;
  .Wrapper__buttonsContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .Wrapper__inputsContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`

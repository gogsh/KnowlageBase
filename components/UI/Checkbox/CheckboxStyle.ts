import styled from 'styled-components'

export const Slider = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  &:checked + div:before {
    transform: translateX(20px);
  }
`

export const SliderLabel = styled.label``

export const SliderRound = styled.div`
  border-radius: 20px;
  width: 40px;
  height: 20px;
  background-color: ${props => props.theme.currentTheme.icons.slider.background};
  cursor: pointer;
  transition: 0.4s;
  &:before {
    border-radius: 20px;
    background-color: ${props => props.theme.currentTheme.icons.slider.circle};
    content: '';
    margin-left: 2px;
    margin-top: 2px;
    height: 16px;
    transition: 0.4s;
    width: 16px;
    position: absolute;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 8px;
`

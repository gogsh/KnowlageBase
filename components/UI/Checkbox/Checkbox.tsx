import React from 'react'
import { Slider, SliderLabel, SliderRound, CheckboxContainer } from './CheckboxStyle'

interface Props {
  type: 'normal' | 'slider'
  value: any
  onClick: any
  checked: boolean
  sliderContent?: {
    left: React.ReactNode
    right: React.ReactNode
  }
}

function Checkbox({ type, value, onClick, checked, sliderContent }: Props) {
  const renderCheckbox = () => {
    switch (type) {
      case 'slider':
        return (
          <CheckboxContainer>
            {sliderContent?.left ? sliderContent.left : null}
            <SliderLabel>
              <Slider type={'checkbox'} value={value} onClick={onClick} defaultChecked={checked} />
              <SliderRound/>
            </SliderLabel>
            {sliderContent?.right ? sliderContent.right : null}
          </CheckboxContainer>
        )
      default:
        return <input type={'checkbox'} value={value} onClick={onClick}></input>
    }
  }

  return renderCheckbox()
}

export default Checkbox

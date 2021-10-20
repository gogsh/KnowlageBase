export type Color =
  | '#F2F2F2'
  | '#202020'
  | '#7E7E7E'

  // white
  | '#FBFBFB'

  // danger
  | '#F0452D'

  // danger background
  | 'linear-gradient(90.26deg, #F85032 -2.18%, #E73827 99.78%)'

  // primary background
  | 'linear-gradient(90.26deg, #DE6262 -2.18%, #FFB88C 99.78%)'

  // border
  | '#EBEBEB'


export interface Theme {
  background: Color
  placeholder: Color
  border: Color
  text: Color
  buttons: {
    color: {
      text: {
        disabled: Color
        danger: Color
        primary: Color
        secondary: Color
        link: Color
      }
      background: {
        disabled: Color
        danger: Color
        primary: Color
        secondary: Color
      }
    }
  }
}

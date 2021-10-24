// TODO: fix this garbage

export type Color =
  | '#F2F2F2'

  // text
  | '#202020'
  | '#7E7E7E'

  // white
  | '#FBFBFB'

  // danger
  | '#E64C3C'

  // danger background
  | 'linear-gradient(90.26deg, #F85032 -2.18%, #E73827 99.78%)'

  // primary background
  | '#259DCF'

  // border, checkbox background
  | '#EBEBEB'

  // ------DARK THEME-------
  // background
  | '#121C20'

  // border, ckeckbox background
  | '#3D3D3D'

  // disabledButton
  | '#273439'
  | '#718993'

  // toast
  | '#0A0F11'

export interface Theme {
  background: Color
  placeholder: Color
  border: Color
  text: Color
  label: Color
  toast: {
    toastBackground: Color
    toastTextColor: Color
  }
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
  icons: {
    disabled: Color
    danger: Color
    primary: Color
    secondary: Color
    hover: Color
    slider: {
      background: Color
      circle: Color
    }
  }
}

import { Color, Theme } from '../types/Theme.types'

const colors: {
  [key: string]: {
    [key: string]: Color
  }
} = {
  text: {
    primary: '#202020',
    secondary: '#7E7E7E',
    danger: '#E64C3C',
    white: '#FBFBFB',
  },
  background: {
    disabled: '#F2F2F2',
    danger: 'linear-gradient(90.26deg, #F85032 -2.18%, #E73827 99.78%)',
    primary: '#259DCF',
    white: '#FBFBFB',
  },
}

const themes: {
  light: Theme
  dark: Theme
} = {
  light: {
    background: '#FBFBFB',
    border: '#EBEBEB',
    placeholder: colors.text.secondary,
    text: '#202020',
    toast: {
      toastBackground: '#202020',
      toastTextColor: '#FBFBFB',
    },
    label: '#7E7E7E',
    buttons: {
      color: {
        text: {
          disabled: colors.text.secondary,
          danger: colors.text.textSecondary,
          primary: colors.text.white,
          secondary: colors.text.secondary,
          link: colors.text.primary,
        },
        background: {
          disabled: colors.background.disabled,
          danger: colors.background.danger,
          primary: colors.background.primary,
          secondary: colors.background.secondary,
        },
      },
    },
    icons: {
      disabled: '#EBEBEB',
      danger: '#E64C3C',
      primary: '#202020',
      secondary: '#7E7E7E',
      hover: '#259DCF',
      slider: {
        background: '#EBEBEB',
        circle: '#259DCF',
      },
    },
  },
  dark: {
    background: '#121C20',
    border: '#3D3D3D',
    placeholder: '#718993',
    text: '#FBFBFB',
    toast: {
      toastBackground: '#0A0F11',
      toastTextColor: '#FBFBFB',
    },
    label: '#7E7E7E',
    buttons: {
      color: {
        text: {
          disabled: "#718993",
          danger: colors.text.textSecondary,
          primary: colors.text.white,
          secondary: "#718993",
          link: '#718993',
        },
        background: {
          disabled: "#273439",
          danger: colors.background.danger,
          primary: colors.background.primary,
          secondary: "#273439",
        },
      },
    },
    icons: {
      disabled: '#EBEBEB',
      danger: '#E64C3C',
      primary: '#FBFBFB',
      secondary: '#7E7E7E',
      hover: '#259DCF',
      slider: {
        background: '#273439',
        circle: '#259DCF',
      },
    },
  },
}

export default themes

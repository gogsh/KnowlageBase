import { Color, Theme } from "../types/Theme.types"

const colors: {
  [key: string]: {
    [key: string]: Color
  }
} = {
  text: {
    primary: '#202020',
    secondary: '#7E7E7E',
    danger: '#F0452D',
    white: '#FBFBFB',
  },
  background: {
    disabled: '#F2F2F2',
    danger: 'linear-gradient(90.26deg, #F85032 -2.18%, #E73827 99.78%)',
    primary: 'linear-gradient(90.26deg, #DE6262 -2.18%, #FFB88C 99.78%)',
    white: '#FBFBFB'
  },
}

const themes: {
  light: Theme
  dark: any
} = {
  light: {
    background : '#FBFBFB',
    border: '#EBEBEB',
    placeholder: colors.text.secondary,
    text: '#202020',
    label: '#7E7E7E',
    buttons: {
      color: {
        text: {
          disabled: colors.text.secondary,
          danger: colors.text.textSecondary,
          primary: colors.text.white,
          secondary: colors.text.secondary,
          link: colors.text.primary
        },
        background: {
          disabled: colors.background.disabled,
          danger: colors.background.danger,
          primary: colors.background.primary,
          secondary: colors.background.secondary,
        }
      }
    },
    icons: {
      disabled: '#EBEBEB',
      danger: '#F0452D',
      primary: '#202020',
      secondary: '#7E7E7E',
      hover:'#7E7E7E',
    }
  },
  dark: ''
}

export default themes

import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

export const StyledContainer = styled(ToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
})`
  .toast {
    background-color: ${props => props.theme.currentTheme.toast.toastBackground};
    div {
      color: ${props => props.theme.currentTheme.toast.toastTextColor};
    }
  }
`

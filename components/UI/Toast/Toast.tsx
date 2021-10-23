import 'react-toastify/dist/ReactToastify.css'
import { StyledContainer } from './ToastStyle'

function Toast() {
  return (
    <>
      <StyledContainer
        position='bottom-center'
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default Toast

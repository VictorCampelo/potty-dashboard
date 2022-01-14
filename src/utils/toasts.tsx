import { toast } from 'react-toastify'

interface ToastProps {
  newMessage?: any
}

export const ErrorToast = ({ newMessage }: ToastProps) => {
  const message = newMessage
  if (message) {
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  } else null
}

export const SucessToast = ({ newMessage }: ToastProps) => {
  const message = newMessage
  if (message) {
    toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  } else null
}

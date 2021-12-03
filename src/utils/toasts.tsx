import { toast } from 'react-toastify'

type ToastProps = {
  newMessage?: string
}

export const ErrorToast = ({ newMessage }: ToastProps) => {
  const message = newMessage
  if (message)
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
}

export const SucessToast = ({ newMessage }: ToastProps) => {
  const message = newMessage
  if (message)
    toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
}

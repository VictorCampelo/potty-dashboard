import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect
} from 'react'

interface Data {
  activeModal: boolean
  showModal: () => void
  toggleModal: () => void
}

interface Props {
  children: ReactNode
}

export const NonSubscribeContext = createContext({} as Data)

export const NonSubscribeProvider = ({ children }: Props) => {
  const [activeModal, setActiveModal] = useState(false)

  function showModal() {
    setActiveModal(true)
  }

  function toggleModal() {
    setActiveModal(!activeModal)
  }

  useEffect(() => {
    document
      .querySelector('body')
      .addEventListener('non-subscribe-modal-show', toggleModal)
  })

  return (
    <NonSubscribeContext.Provider
      value={{ activeModal, showModal, toggleModal }}
    >
      {children}
    </NonSubscribeContext.Provider>
  )
}

export const useNonSubscribe = () => {
  const context = useContext(NonSubscribeContext)

  if (!context) {
    throw new Error(
      'useNonSubscribe must be used within a NonSubscribeProvider'
    )
  }

  return context
}

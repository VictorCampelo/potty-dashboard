import { useWindowDimensions } from 'functions/windowDimensios'
import React, {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect
} from 'react'

type RenderFieldProps = {
  show: number
  showPrimary: () => void
  showSecondary: () => void
  showAll: () => void
}

export const RenderFieldContext = createContext({} as RenderFieldProps)

type RenderContext = {
  children: ReactNode
}

export function RenderFieldProvider({ children }: RenderContext) {
  const [show, setShow] = useState(0)
  const widthWindow = useWindowDimensions()

  useEffect(() => {
    if (widthWindow < 426) {
      setShow(1)
    } else {
      setShow(0)
    }
  }, [widthWindow])
  function showSecondary(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    setShow(2)
  }

  return (
    <RenderFieldContext.Provider value={{ show, showSecondary }}>
      {children}
    </RenderFieldContext.Provider>
  )
}

export function useRenderField() {
  const context = useContext(RenderFieldContext)

  return context
}

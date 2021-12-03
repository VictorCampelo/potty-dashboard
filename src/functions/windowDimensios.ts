import { useState, useEffect } from 'react'

// function getWindowDimensions(){
//     const { innerWidth: width, innerHeight: height } = window;

//     return {
//         width,
//         height
//     }
// }

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(0)

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

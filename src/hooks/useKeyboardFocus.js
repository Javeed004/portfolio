import { useEffect } from 'react'

/**
 * Replicates the original index.js behaviour: only show a focus outline
 * when the person is navigating with a keyboard (Tab), not with a mouse.
 * Toggles a "user-is-tabbing" class on <body>, which src/index.css uses.
 */
export default function useKeyboardFocus() {
  useEffect(() => {
    const handleFirstTab = (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing')
        window.removeEventListener('keydown', handleFirstTab)
        window.addEventListener('mousedown', handleMouseDownOnce)
      }
    }

    const handleMouseDownOnce = () => {
      document.body.classList.remove('user-is-tabbing')
      window.removeEventListener('mousedown', handleMouseDownOnce)
      window.addEventListener('keydown', handleFirstTab)
    }

    window.addEventListener('keydown', handleFirstTab)

    return () => {
      window.removeEventListener('keydown', handleFirstTab)
      window.removeEventListener('mousedown', handleMouseDownOnce)
    }
  }, [])
}

import { useEffect, useState } from 'react'

/**
 * Replicates the original index.js scroll listener: the "back to top"
 * button becomes visible once the page has scrolled past 700px.
 */
export default function useBackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 700)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return isVisible
}

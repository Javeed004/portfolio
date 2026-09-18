import { useEffect, useState } from 'react'
import { ROW, NAV_LINK } from '../utils/classNames'

const navItems = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  // Lock background scroll while the sidebar is open, and let Escape close it.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  return (
    <div className={ROW}>
      <nav className="flex items-center justify-end py-gutter-normal" role="navigation">
        {/* Desktop nav (unchanged) */}
        <ul className="hidden min-[901px]:flex list-none">
          {navItems.map((item, i) => (
            <li key={item.href} className={i !== navItems.length - 1 ? 'mr-gutter-medium' : ''}>
              <a href={item.href} className={NAV_LINK}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          aria-expanded={isOpen}
          className="hidden max-[900px]:flex flex-col justify-center items-center gap-[0.5rem] w-[3rem] h-[3rem] relative z-30"
        >
          <span className="block h-[2px] w-full bg-white" />
          <span className="block h-[2px] w-full bg-white" />
          <span className="block h-[2px] w-full bg-white" />
        </button>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-[26rem] max-w-[80vw] bg-black border-l border-light z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-gutter-normal">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="relative w-[3rem] h-[3rem]"
          >
            <span className="absolute top-1/2 left-1/2 w-[2rem] h-[2px] bg-white -translate-x-1/2 -translate-y-1/2 rotate-45" />
            <span className="absolute top-1/2 left-1/2 w-[2rem] h-[2px] bg-white -translate-x-1/2 -translate-y-1/2 -rotate-45" />
          </button>
        </div>

        <ul className="flex flex-col px-gutter-normal list-none">
          {navItems.map((item) => (
            <li key={item.href} className="mb-gutter-normal">
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-normal text-white-1 transition-colors duration-200 hover:text-pink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}
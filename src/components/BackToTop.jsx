import useBackToTop from '../hooks/useBackToTop'

export default function BackToTop() {
  const isVisible = useBackToTop()

  return (
    <a
      href="#top"
      title="Back to Top"
      className={[
        'fixed bottom-[4rem] right-[4rem] max-[900px]:right-[2rem] max-[500px]:right-[1rem]',
        'flex items-center justify-center h-[5.5rem] w-[5.5rem] rounded-full bg-pink z-10',
        'transition-all duration-[400ms]',
        isVisible ? 'visible opacity-100 scale-100' : 'invisible opacity-0 scale-0',
      ].join(' ')}
    >
      <img src="/images/arrow-up.svg" alt="Back to Top" className="h-[70%]" />
    </a>
  )
}

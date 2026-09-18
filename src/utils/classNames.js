// Reusable Tailwind class strings that replicate the original .row / .btn /
// .link__text / .nav__link rules from index.css, so every component pulls
// from one source instead of repeating long class strings.

// .row
export const ROW =
  'max-w-container mx-auto max-[1340px]:max-w-container-1100 max-[1240px]:px-gutter-medium max-[600px]:px-gutter-small'

// .btn (outlined, sliding white->pink fill on hover/focus)
const BTN_BASE =
  "relative inline-block px-[4.2rem] py-[1rem] text-inherit font-normal no-underline outline-none overflow-hidden isolate before:content-[''] before:absolute before:inset-y-0 before:left-0 before:right-full before:-z-10 before:transition-all before:duration-200 before:ease-[cubic-bezier(1,0.68,0.16,0.9)]"

export const BTN_OUTLINE = `${BTN_BASE} border border-pink before:bg-white hover:before:right-0 hover:before:bg-pink focus:before:right-0 focus:before:bg-pink`

// .btn--pink (solid pink, fades to transparent on hover/focus, no sliding fill)
export const BTN_SOLID =
  'relative inline-block px-[4.2rem] py-[1rem] text-inherit font-normal no-underline outline-none border border-pink bg-pink transition-colors duration-200 hover:bg-transparent focus:bg-transparent'

// .link__text (underlined text link with sliding fill + trailing arrow span)
export const LINK_TEXT =
  "relative inline-block py-[0.6rem] px-[0.6rem] text-inherit no-underline border-b border-pink outline-none overflow-hidden before:content-[''] before:absolute before:inset-y-0 before:left-0 before:right-full before:-z-10 before:bg-white before:transition-all before:duration-200 before:ease-[cubic-bezier(1,0.68,0.16,0.9)] hover:before:right-0 hover:before:bg-pink focus:before:right-0 focus:before:bg-pink"

// .nav__link (underline reveal on hover)
export const NAV_LINK =
  "relative inline-block py-[1rem] text-inherit no-underline transition-colors duration-200 before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-full before:h-[1rem] before:bg-white before:transition-all before:duration-[250ms] before:ease-[cubic-bezier(1,0.68,0.16,0.9)] hover:text-pink hover:before:right-0 hover:before:h-[2px] hover:before:bg-pink"

// Small dependency-free line icons (feather-style: 24x24 viewBox,
// currentColor stroke). Add more here as needed — no icon library required.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function CodeIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <polyline points="8 6 2 12 8 18" />
      <polyline points="16 6 22 12 16 18" />
    </svg>
  )
}

export function ChipIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <line x1="6" y1="10" x2="2" y2="10" />
      <line x1="6" y1="14" x2="2" y2="14" />
      <line x1="18" y1="10" x2="22" y2="10" />
      <line x1="18" y1="14" x2="22" y2="14" />
      <line x1="10" y1="6" x2="10" y2="2" />
      <line x1="14" y1="6" x2="14" y2="2" />
      <line x1="10" y1="18" x2="10" y2="22" />
      <line x1="14" y1="18" x2="14" y2="22" />
    </svg>
  )
}

export function UsersIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="8.5" r="2.2" />
      <path d="M15.5 20c.15-2.5 1.7-4.4 3.8-5" />
    </svg>
  )
}

export function MapPinIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 22s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function BriefcaseIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="3" y1="13" x2="21" y2="13" />
    </svg>
  )
}

export function TargetIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function CompassIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <polygon points="14.5 9.5 10.2 10.2 9.5 14.5 13.8 13.8 14.5 9.5" />
    </svg>
  )
}

export function MailIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 6 10 7 10-7" />
    </svg>
  )
}
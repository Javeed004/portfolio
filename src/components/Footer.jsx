import { ROW } from '../utils/classNames'

const socialLinks = [
  {
    href: 'https://github.com/Javeed004/',
    title: 'Link to Github Profile',
    icon: '/images/github.svg',
    alt: 'Github',
  },
  {
    href: 'https://www.linkedin.com/in/javeed-rahman',
    title: 'Link to Linkedin Profile',
    icon: '/images/linkedin.svg',
    alt: 'Linkedin',
  },
]

export default function Footer() {
  return (
    <footer role="contentinfo" className="text-center py-gutter-normal max-[500px]:py-gutter-medium">
      <div className={ROW}>
        <ul className="flex justify-center py-gutter-normal list-none">
          {socialLinks.map((link, i) => (
            <li key={link.href} className={i !== socialLinks.length - 1 ? 'mr-gutter-small' : ''}>
              <a href={link.href} title={link.title} target="_blank" rel="noreferrer">
                <img src={link.icon} alt={link.alt} className="h-[4rem]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

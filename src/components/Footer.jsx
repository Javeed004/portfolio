import social from '../data/social'
import { ROW } from '../utils/classNames'

export default function Footer() {
  return (
    <footer role="contentinfo" className="text-center py-gutter-normal max-[500px]:py-gutter-medium">
      <div className={ROW}>
        <ul className="flex justify-center py-gutter-normal list-none">
          {social.map((link, i) => (
            <li key={link.href} className={i !== social.length - 1 ? 'mr-gutter-small' : ''}>
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
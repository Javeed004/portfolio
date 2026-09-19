import SectionHeading from './SectionHeading'
import certifications from '../data/certifications'
import { ROW, LINK_TEXT } from '../utils/classNames'

export default function Certifications() {
  return (
    <section id="certifications" className="py-gutter-huge border-b border-light bg-black">
      <div className={`${ROW} max-[1240px]:px-gutter-normal`}>
        <SectionHeading>Certifications</SectionHeading>

        <div className="grid grid-cols-1 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-3 gap-gutter-normal">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="group relative block border border-light p-gutter-normal before:content-[''] before:absolute before:top-0 before:left-0 before:w-[4rem] before:h-[2px] before:bg-pink transition-colors duration-200 hover:border-pink"
            >
              <p className="text-normal text-white mb-gutter-small">{cert.name}</p>
              <span className={LINK_TEXT}>
                View Credential <span className="pl-[1rem] font-sans">&rarr;</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
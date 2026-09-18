import SectionHeading from './SectionHeading'
import certifications from '../data/certifications'
import { ROW } from '../utils/classNames'

export default function Certifications() {
  return (
    <section id="certifications" className="py-gutter-huge border-b border-light bg-black">
      <div className={`${ROW} max-[1240px]:px-gutter-normal`}>
        <SectionHeading>Certifications</SectionHeading>

        <div className="relative border border-light p-gutter-normal before:content-[''] before:absolute before:top-0 before:left-0 before:w-[4rem] before:h-[2px] before:bg-pink">
          <ul className="flex flex-wrap gap-[1rem] list-none">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-[1.5rem] leading-[1.4] px-[1.4rem] py-[0.6rem] text-white-1 border border-[rgb(50,50,50)] transition-colors duration-200 hover:border-pink hover:text-white"
                >
                  {cert.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

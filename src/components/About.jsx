import SectionHeading from './SectionHeading'
import quickFacts from '../data/quickFacts'
import { MapPinIcon, BriefcaseIcon, TargetIcon, CompassIcon } from './Icons'
import { ROW, BTN_OUTLINE } from '../utils/classNames'

const iconMap = {
  mapPin: MapPinIcon,
  briefcase: BriefcaseIcon,
  target: TargetIcon,
  compass: CompassIcon,
}

export default function About() {
  return (
    <section id="about" className="py-gutter-huge border-b border-light">
      <div className={ROW}>
        <SectionHeading>About Me</SectionHeading>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.3fr_1fr] gap-gutter-medium items-start">
          <div>
            <p className="my-0 text-justify max-[900px]:max-w-container-small">
              I'm an Aspiring Data Analyst with a passion for AI, deep learning, and data science,
              dedicated to transforming raw data into meaningful insights that drive real-world impact.
              My skills include machine learning, data visualization, and analytics, and I'm expanding
              into web development to create seamless, data-driven applications. With a strong
              analytical mindset, adaptability, and a commitment to continuous learning, I embrace
              challenges that push me to innovate and grow in the ever-evolving tech landscape.
            </p>
            <a
              href="https://drive.google.com/file/d/1n6wj5ABGU46qbzaTBqLgV_MHj0VnuVbx/view?usp=sharing"
              className={`${BTN_OUTLINE} mt-gutter-normal`}
            >
              My Resume
            </a>
          </div>

          <div className="relative border border-light p-gutter-normal before:content-[''] before:absolute before:top-0 before:left-0 before:w-[4rem] before:h-[2px] before:bg-pink">
            <ul className="flex flex-col gap-gutter-normal list-none">
              {quickFacts.map(({ icon, label, value }) => {
                const Icon = iconMap[icon]
                return (
                  <li key={label} className="flex items-start gap-[1.4rem]">
                    <Icon className="h-[2.2rem] w-[2.2rem] flex-shrink-0 mt-[0.2rem] text-pink" />
                    <div>
                      <div className="text-[1.3rem] text-white-1">{label}</div>
                      <div className="text-[1.6rem] text-white">{value}</div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
import SectionHeading from './SectionHeading'
import ExperienceItem from './ExperienceItem'
import experience from '../data/experience'
import { ROW } from '../utils/classNames'

export default function Experience() {
  return (
    <section id="experience" className="py-gutter-huge border-b border-light">
      <div className={ROW}>
        <SectionHeading>Experience</SectionHeading>

        <div>
          {experience.map((item, i) => (
            <ExperienceItem key={item.company + item.dateRange} item={item} isLast={i === experience.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

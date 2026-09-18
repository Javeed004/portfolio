import SectionHeading from './SectionHeading'
import WorkItem from './WorkItem'
import projects from '../data/projects'
import { ROW } from '../utils/classNames'

export default function Work() {
  return (
    <section id="work" className="py-gutter-huge border-b border-light">
      <div className={ROW}>
        <SectionHeading>My Work</SectionHeading>

        <div>
          {projects.map((project, i) => (
            <WorkItem key={project.title} project={project} isLast={i === projects.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

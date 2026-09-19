import { useState } from 'react'
import SectionHeading from './SectionHeading'
import WorkItem from './WorkItem'
import WorkMoreItem from './WorkMoreItem'
import projects from '../data/projects'
import { ROW, BTN_OUTLINE } from '../utils/classNames'

export default function Work() {
  const [showMore, setShowMore] = useState(false)

  const featured = projects.filter((project) => project.featured)
  const more = projects.filter((project) => !project.featured)

  return (
    <section id="work" className="py-gutter-huge border-b border-light">
      <div className={ROW}>
        <SectionHeading>My Work</SectionHeading>

        <div>
          {featured.map((project, i) => (
            <WorkItem key={project.title} project={project} isLast={i === featured.length - 1} />
          ))}
        </div>

        {more.length > 0 && (
          <div className="mt-gutter-medium">
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setShowMore((v) => !v)}
                aria-expanded={showMore}
                aria-controls="more-projects"
                className={BTN_OUTLINE}
              >
                {showMore ? 'Show Less' : `View All Projects (${more.length} more)`}
              </button>
            </div>

            <div
              id="more-projects"
              className={[
                'grid grid-cols-1 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-3',
                'gap-gutter-normal overflow-hidden transition-all duration-500 ease-in-out',
                showMore ? 'max-h-[5000px] opacity-100 mt-gutter-medium' : 'max-h-0 opacity-0 mt-0',
              ].join(' ')}
            >
              {more.map((project) => (
                <WorkMoreItem key={project.title} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
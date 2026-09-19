import SectionHeading from './SectionHeading'
import SkillsBox from './SkillsBox'
import skillGroups from '../data/skills'
import { ROW } from '../utils/classNames'

export default function Skills() {
  return (
    <section id="skills" className="py-gutter-huge border-b border-light bg-black">
      <div className={`${ROW} max-[1240px]:px-gutter-normal`}>
        <SectionHeading>My Skills</SectionHeading>

        <div className="grid grid-cols-1 min-[700px]:grid-cols-2 min-[1200px]:grid-cols-3 gap-gutter-medium max-[900px]:gap-gutter-normal items-start">
          {skillGroups.map((group) => (
            <SkillsBox key={group.title} title={group.title} icon={group.icon} items={group.items} />
          ))}
        </div>
      </div>
    </section>
  )
}
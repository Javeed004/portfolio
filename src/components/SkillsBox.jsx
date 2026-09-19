import { CodeIcon, ChipIcon, UsersIcon } from './Icons'

const iconMap = {
  code: CodeIcon,
  chip: ChipIcon,
  users: UsersIcon,
}

export default function SkillsBox({ title, icon, items }) {
  const Icon = iconMap[icon]

  return (
    <div className="relative border border-light p-gutter-normal before:content-[''] before:absolute before:top-0 before:left-0 before:w-[4rem] before:h-[2px] before:bg-pink">
      <div className="flex items-center gap-[1.2rem] mb-gutter-normal">
        {Icon && <Icon className="h-[2.4rem] w-[2.4rem] flex-shrink-0 text-pink" />}
        <h3 className="text-white font-heading font-normal text-[1.6rem]">{title}</h3>
      </div>

      <ul className="flex flex-wrap gap-[1rem] list-none">
        {items.map((item) => (
          <li
            key={item}
            className="text-[1.5rem] leading-[1.4] px-[1.4rem] py-[0.6rem] text-white-1 border border-[rgb(50,50,50)] transition-colors duration-200 hover:border-pink hover:text-white"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
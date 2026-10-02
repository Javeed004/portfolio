import { CodeIcon, ChipIcon, UsersIcon, SparklesIcon, ServerIcon, LayersIcon } from './Icons'

const iconMap = {
  code: CodeIcon,
  chip: ChipIcon,
  users: UsersIcon,
  sparkles: SparklesIcon,
  server: ServerIcon,
  layers: LayersIcon,
}

export default function SkillsBox({ title, icon, items, usedIn }) {
  const Icon = iconMap[icon]

  return (
    <div className="relative flex flex-col h-full border border-light p-gutter-normal transition-colors duration-200 hover:border-[rgb(70,70,70)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[4rem] before:h-[2px] before:bg-pink">
      <div className="flex items-center gap-[1.2rem] mb-gutter-normal">
        {Icon && <Icon className="h-[2.4rem] w-[2.4rem] flex-shrink-0 text-pink" />}
        <h3 className="text-white font-heading font-normal text-[1.6rem]">{title}</h3>
      </div>

      <ul className="flex flex-wrap gap-[0.8rem] list-none">
        {items.map((item) => (
          <li
            key={item}
            className="text-[1.4rem] leading-[1.4] px-[1.2rem] py-[0.5rem] text-white-1 border border-[rgb(50,50,50)] transition-colors duration-200 hover:border-pink hover:text-white"
          >
            {item}
          </li>
        ))}
      </ul>

      {usedIn && (
        <p className="mt-auto pt-gutter-normal">
          <span className="block border-t border-light pt-[1.4rem] text-[1.3rem] leading-[1.5] text-white-1">
            <span className="text-pink uppercase tracking-wide mr-[0.8rem]">Used in</span>
            {usedIn}
          </span>
        </p>
      )}
    </div>
  )
}
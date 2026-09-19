import { LINK_TEXT } from '../utils/classNames'

export default function WorkMoreItem({ project }) {
  const { title, description, tags, repoUrl, demoUrl, image } = project

  return (
    <div className="relative flex flex-col h-full border border-light p-gutter-normal before:content-[''] before:absolute before:top-0 before:left-0 before:w-[4rem] before:h-[2px] before:bg-pink">
      <div className="mb-gutter-small overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[18rem] object-cover transition-transform duration-300 hover:scale-[1.06]"
        />
      </div>

      <h3 className="font-heading text-normal mb-[0.8rem] text-white font-normal">{title}</h3>

      <p className="flex-1 text-[1.5rem] leading-[1.5] text-white-1 text-justify mb-gutter-small">
        {description}
      </p>

      <ul className="flex flex-wrap gap-[0.8rem] mb-gutter-small list-none">
        {tags.map((tag) => (
          <li
            key={tag}
            className="text-[1.3rem] leading-[1.4] px-[1.2rem] py-[0.4rem] text-white-1 border border-[rgb(50,50,50)]"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="flex items-center mt-auto pt-[0.5rem]">
        <a href={demoUrl || repoUrl} target="_blank" rel="noreferrer" className={LINK_TEXT}>
          {demoUrl ? 'View Demo' : 'Visit Repo'} <span className="pl-[1rem] font-sans">&rarr;</span>
        </a>
        <a href={repoUrl} title="View Source Code" target="_blank" rel="noreferrer">
          <img
            src="/images/github.svg"
            alt="GitHub"
            className="block h-[2.4rem] ml-gutter-normal transition-transform duration-300 hover:scale-[1.2]"
          />
        </a>
      </div>
    </div>
  )
}
import { LINK_TEXT } from '../utils/classNames'

// Compact "view all projects" grid entry — same labelled key/value rows as
// WorkItem, sized down slightly for the grid but still filling the card.
export default function WorkMoreItem({ project }) {
  const { title, description, tags, repoUrl, demoUrl } = project
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  return (
    <div className="flex flex-col h-full font-mono border border-light p-gutter-normal">
      <div className="text-[1.3rem] text-white-1 mb-gutter-small">
        <span className="text-pink">$</span> cat {slug}.manifest
      </div>

      <dl className="grid grid-cols-[5.5rem_1fr] gap-y-[1.2rem] gap-x-[1.2rem] text-[1.4rem]">
        <dt className="text-[rgb(120,118,124)]">title</dt>
        <dd className="text-white text-[1.8rem] leading-tight">{title}</dd>

        <dt className="text-[rgb(120,118,124)]">tags</dt>
        <dd className="flex flex-wrap gap-[0.6rem]">
          {tags.map((tag) => (
            <span key={tag} className="text-pink">[{tag}]</span>
          ))}
        </dd>

        <dt className="text-[rgb(120,118,124)] pt-[0.15rem]">desc</dt>
        <dd className="font-sans text-justify text-[1.5rem] leading-[1.65] text-white-1">{description}</dd>
      </dl>

      <a
        href={demoUrl || repoUrl}
        target="_blank"
        rel="noreferrer"
        className={`${LINK_TEXT} mt-auto pt-gutter-small self-start text-[1.4rem]`}
      >
        {demoUrl ? './demo' : './repo'} <span className="pl-[1rem] font-sans">&rarr;</span>
      </a>
    </div>
  )
}
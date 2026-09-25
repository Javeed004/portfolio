import { LINK_TEXT } from '../utils/classNames'

// Featured project entry, styled as a terminal window `cat`-ing a manifest
// file. Labelled rows (title / tags / desc / run) instead of a paragraph,
// sized to actually fill the card width instead of leaving a narrow column.
export default function WorkItem({ project, isLast }) {
  const { title, description, tags, repoUrl, demoUrl } = project
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  return (
    <div
      className={[
        'font-mono border border-light',
        isLast ? '' : 'mb-gutter-normal',
      ].join(' ')}
    >
      {/* window chrome */}
      <div className="flex items-center gap-[0.8rem] px-gutter-normal py-[1.4rem] border-b border-light">
        <span className="h-[1.2rem] w-[1.2rem] rounded-full bg-[rgb(60,60,60)]" />
        <span className="h-[1.2rem] w-[1.2rem] rounded-full bg-[rgb(60,60,60)]" />
        <span className="h-[1.2rem] w-[1.2rem] rounded-full bg-[rgb(60,60,60)]" />
        <span className="ml-gutter-small text-[1.5rem] text-white-1">{slug}.manifest</span>
      </div>

      <div className="p-gutter-normal max-[500px]:p-gutter-small">
        <div className="text-[1.5rem] text-white-1 mb-gutter-medium">
          <span className="text-pink">$</span> cat {slug}.manifest
        </div>

        <dl className="grid grid-cols-[10rem_1fr] max-[500px]:grid-cols-[7rem_1fr] gap-y-gutter-small gap-x-gutter-normal text-[1.6rem]">
          <dt className="text-[rgb(120,118,124)]">title</dt>
          <dd className="text-white text-[2.6rem] max-[500px]:text-[2rem] leading-tight">{title}</dd>

          <dt className="text-[rgb(120,118,124)]">tags</dt>
          <dd className="flex flex-wrap gap-[0.9rem] text-[1.8rem]">
            {tags.map((tag) => (
              <span key={tag} className="text-pink">[{tag}]</span>
            ))}
          </dd>

          <dt className="text-[rgb(120,118,124)] pt-[0.2rem]">desc</dt>
          <dd className="font-sans text-justify text-[1.8rem] leading-[1.7] text-white-1 max-[900px]:max-w-container-small">
            {description}
          </dd>

          <dt className="text-[rgb(120,118,124)]">run</dt>
          <dd>
            <a href={demoUrl || repoUrl} target="_blank" rel="noreferrer" className={`${LINK_TEXT} text-[1.6rem]`}>
              {demoUrl ? './demo' : './repo'} <span className="pl-[1rem] font-sans">&rarr;</span>
            </a>
          </dd>
        </dl>
      </div>
    </div>
  )
}
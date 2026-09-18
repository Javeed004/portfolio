import { LINK_TEXT } from '../utils/classNames'

export default function WorkItem({ project, isLast }) {
  const { title, description, tags, repoUrl, demoUrl, image, reversed } = project

  return (
    <div
      className={[
        'flex items-stretch max-[900px]:items-stretch max-[900px]:flex-col-reverse',
        reversed ? 'flex-row-reverse' : '',
        isLast ? '' : 'mb-[25rem] max-[500px]:mb-[20rem]',
      ].join(' ')}
    >
      <div className="flex-[0_0_35%]">
        <h3 className="font-heading text-medium-1 max-[500px]:text-medium mb-gutter-small text-white font-normal">
          {title}
        </h3>
        <p className="my-gutter-small-1 text-justify max-[900px]:max-w-container-small">{description}</p>

        <ul className="list-none list-inside mb-gutter-normal">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="flex items-center">
          <a
            href={demoUrl || repoUrl}
            target="_blank"
            rel="noreferrer"
            className={LINK_TEXT}
          >
            {demoUrl ? 'View Demo' : 'Visit Repo'} <span className="pl-[1rem] font-sans">&rarr;</span>
          </a>
          <a href={repoUrl} title="View Source Code" target="_blank" rel="noreferrer">
            <img
              src="/images/github.svg"
              alt="GitHub"
              className="block h-[3rem] ml-gutter-normal transition-transform duration-300 hover:scale-[1.2]"
            />
          </a>
        </div>
      </div>

      <div
        className={[
          'mb-gutter-normal',
          'min-[901px]:flex-[0_0_55%] min-[901px]:flex min-[901px]:mb-0',
          reversed ? 'min-[901px]:mr-[10rem]' : 'min-[901px]:ml-[10rem]',
        ].join(' ')}
      >
        <img
          src={image}
          alt={title}
          className="min-[901px]:w-full min-[901px]:h-full min-[901px]:object-cover"
        />
      </div>
    </div>
  )
}

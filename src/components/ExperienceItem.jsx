export default function ExperienceItem({ item, isLast }) {
  const { dateRange, role, company, companyUrl, description, tags } = item

  return (
    <div
      className={[
        'grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-x-gutter-normal gap-y-[0.8rem]',
        isLast ? '' : 'mb-gutter-medium pb-gutter-medium border-b border-light',
      ].join(' ')}
    >
      <div className="font-heading uppercase tracking-wide text-[1.4rem] text-white-1 md:pt-[0.3rem]">
        {dateRange}
      </div>

      <div>
        <h3 className="font-heading text-medium max-[500px]:text-normal font-normal text-white mb-[0.5rem]">
          <a
            href={companyUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-pink"
          >
            {role} <span className="text-white-1">· {company}</span>
          </a>
        </h3>

        <p className="my-0 text-justify max-[900px]:max-w-container-small">{description}</p>

        <ul className="flex flex-wrap gap-[1rem] mt-gutter-small list-none">
          {tags.map((tag) => (
            <li
              key={tag}
              className="text-[1.5rem] leading-[1.4] px-[1.4rem] py-[0.6rem] text-white-1 border border-[rgb(50,50,50)] transition-colors duration-200 hover:border-pink hover:text-white"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

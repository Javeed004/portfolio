export default function SkillsBox({ title, items }) {
  return (
    <div className="relative border border-light p-gutter-normal before:content-[''] before:absolute before:top-0 before:left-0 before:w-[4rem] before:h-[2px] before:bg-pink">
      <h3 className="mb-gutter-normal text-white font-heading font-normal uppercase tracking-wide text-[1.4rem]">
        {title}
      </h3>
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

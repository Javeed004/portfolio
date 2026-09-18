export default function SectionHeading({ children }) {
  return (
    <>
      <h2 className="font-heading text-large max-[500px]:text-medium-1 leading-small font-normal text-white">
        {children}
      </h2>
      <span className="block h-[2px] w-[10rem] bg-pink mt-gutter-small mb-[8rem]" aria-hidden="true" />
    </>
  )
}

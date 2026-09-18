import SectionHeading from './SectionHeading'
import { ROW, BTN_OUTLINE } from '../utils/classNames'

export default function About() {
  return (
    <section id="about" className="py-gutter-huge border-b border-light">
      <div className={ROW}>
        <SectionHeading>About Me</SectionHeading>

        <div className="w-full">
          <p className="my-gutter-small-1 text-justify max-[900px]:max-w-container-small">
            I'm an Aspiring Data Analyst with a passion for AI, deep learning, and data science,
            dedicated to transforming raw data into meaningful insights that drive real-world impact.
            My skills include machine learning, data visualization, and analytics, and I'm expanding
            into web development to create seamless, data-driven applications. With a strong
            analytical mindset, adaptability, and a commitment to continuous learning, I embrace
            challenges that push me to innovate and grow in the ever-evolving tech landscape.
          </p>
          <a
            href="https://drive.google.com/file/d/1n6wj5ABGU46qbzaTBqLgV_MHj0VnuVbx/view?usp=sharing"
            className={BTN_OUTLINE}
          >
            My Resume
          </a>
        </div>
      </div>
    </section>
  )
}

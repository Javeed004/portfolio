import SectionHeading from './SectionHeading'
import { ROW, BTN_OUTLINE } from '../utils/classNames'

export default function Contact() {
  return (
    <section id="contact" className="py-gutter-huge border-b border-light">
      <div className={ROW}>
        <SectionHeading>Get in Touch</SectionHeading>

        <div className="w-full">
          <p className="my-gutter-small-1 text-justify max-[900px]:max-w-container-small">
            Are you looking for help with a project, need some tech advice, or just want to
            connect? 🚀 Feel free to reach out—even if it's just to say "Hi 👋"! I'll do my best to
            respond. 😊 The quickest way to reach me is via email.
          </p>
          <a href="mailto:javeedrahman1404@gmail.com" className={BTN_OUTLINE}>
            javeedrahman1404@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

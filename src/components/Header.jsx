import Nav from './Nav'
import { ROW, BTN_SOLID } from '../utils/classNames'

export default function Header() {
  return (
    <header
      id="top"
      role="banner"
      className="relative h-screen text-normal bg-cover bg-center bg-fixed bg-black"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.4)), url('/images/header.jpg')",
      }}
    >
      <Nav />

      <div className={`${ROW} absolute top-1/2 -translate-y-1/2 pl-20 md:pl-24 lg:pl-32`}>
        <div>
          <h1 className="font-heading leading-none text-large max-[900px]:text-[6.5rem] max-[500px]:text-large text-white font-normal">
            <span>Javeed Zulfikar</span>
          </h1>

          <p className="my-[1.5rem] mb-[3.5rem] max-w-container-medium font-heading text-medium max-[500px]:scale-[.8] max-[500px]:origin-left">
            Data Enthusiast based in Tamil Nadu, India.
          </p>

          <a href="#contact" className={BTN_SOLID}>
            Get in touch
          </a>
        </div>
      </div>
    </header>
  )
}

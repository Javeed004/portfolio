import Header from './components/Header'
import Work from './components/Work'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import useKeyboardFocus from './hooks/useKeyboardFocus'

export default function App() {
  useKeyboardFocus()

  return (
    <>
      <Header />

      <main role="main">
        <Work />
        <Experience />
        <Skills />
        <Certifications />
        <About />
      </main>

      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}

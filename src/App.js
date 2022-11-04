import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => (
  <div>
    <Navbar />
    <main className="p-5">
      <About />
      <Skills />
      <Projects />
    </main>
    <hr/>
    <Footer />
  </div>
)

export default App

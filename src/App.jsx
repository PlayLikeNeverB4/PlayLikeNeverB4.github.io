import { useState } from 'react'
import { ThemeContext, getStoredTheme, updateStoredTheme } from './theme'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => {
  const defaultTheme = getStoredTheme() || 'dark'
  const [ theme, setTheme ] = useState(defaultTheme)
  // Tailwind theme plugin has some weird logic, can't use `${theme}-theme`
  const themeClass = theme === 'dark' ? 'dark-theme' : ''

  const handleThemeChange = theme => {
    setTheme(theme)
    updateStoredTheme(theme)
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`${themeClass} bg-white text-black`}>
        <Navbar onThemeChange={handleThemeChange} />
        <main className="p-5 max-md:px-2">
          <About />
          <Skills />
          <Projects />
        </main>
        <hr/>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App

import { useContext, useState } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import { Collapse } from 'react-collapse'
import { Classic } from '@theme-toggles/react'
import { ThemeContext } from '../theme'

import '@theme-toggles/react/css/Classic.css'

const Navbar = ({ onThemeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = () => {
    setIsMenuOpen(open => !open)
  }

  const handleThemeToggle = toggled => {
    const theme = toggled ? 'dark' : 'light'
    onThemeChange(theme)
  }

  const theme = useContext(ThemeContext)

  const navItems = (
    <>
      <a href="#about" className="text-xl text-gray-500 hover:text-gray-700 w-full md:w-auto">
        About
      </a>
      <a href="#skills" className="text-xl text-gray-500 hover:text-gray-700 w-full md:w-auto">
        Skills
      </a>
      <a href="#projects" className="text-xl text-gray-500 hover:text-gray-700 w-full md:w-auto">
        Projects
      </a>
      <a href="/CVGeorgeMarcus.pdf"
         target="_blank"
         className="text-xl underline text-gray-500 hover:text-gray-700 w-full md:w-auto"
      >
        CV
      </a>
      <div className="flex relative text-black items-end gap-6 md:gap-2 md:ml-auto">
        <a href="mailto:george.marcus922@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/george-marcus-34398478"
            target="_blank"
            rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#0A66C2' }} />
        </a>
        <a href="https://github.com/PlayLikeNeverB4"
            target="_blank"
            rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSquareGithub} size="2x" />
        </a>
      </div>
    </>
  )

  return (
    <header>
      <nav className="px-5 py-3 border-b flex flex-col md:flex-row justify-between">
        <div className="md:h-10 flex flex-col md:flex-row w-full">
          <div className="w-full md:w-auto flex justify-between">
            <a href="/" className="text-3xl font-bold text-black">
              {'< '}
              George Mărcuș
              {' />'}
            </a>
            <Classic duration={500}
               className={classNames('text-3xl ml-3', {
                 'text-yellow-300': theme === 'light',
                 'text-yellow-200': theme === 'dark',
               })}
               onToggle={handleThemeToggle}
               toggled={theme === 'dark'}
            />
            <button className="font-bold text-black md:hidden"
                    onClick={handleClick}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </button>
          </div>
          {/* Regular items */}
          <div className="hidden md:flex gap-5 grow ml-4 items-center">
            {navItems}
          </div>
          {/* Dropdown items */}
          <Collapse isOpened={isMenuOpen}>
            <div className="flex flex-col md:hidden gap-7 mt-6 text-start">
              {navItems}
            </div>
          </Collapse>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
